/**
 * @file calculator.js
 * @author Max Godefroy <max@godefroy.net>
 */

import jobModifiers from './data/jobModifiers'
import levelModifiers from './data/levelModifiers'
import * as Functions from './functions'
import {JobStatus} from "./jobStatus";
import {DragoonStatus} from "./jobs/drg/status";


export class Calculator
{
    constructor()
    {
        this.setJob('PLD');
        this.setLevel(80);
        this.setMainStat('STR', 380);
        this.setStats(100, 380, 380, 380, 380, 380);
        this.setTraitBoost(1.);
        this._status = new JobStatus()
    }

    setJob(jobName)
    {
        for (let i = 0; i < jobModifiers.length; i++) {
            if (jobModifiers[i].Job.toLowerCase() === jobName.toLowerCase()) {
                this._setJobAtIndex(i);
                this._setJobStatus(jobName);
                return
            }
        }
        throw "No such job: " + jobName
    }

    _setJobAtIndex(index)
    {
        this.jobModifier = jobModifiers[index]
    }


    _setJobStatus(jobName)
    {
        switch (jobName) {
            case 'DRG':
                this._status = new DragoonStatus();
                break;
            default:
                this._status = new JobStatus()
        }
    }


    setLevel(level)
    {
        for (let i = 0; i < levelModifiers.length; i++) {
            if (levelModifiers[i]["Lv."] === level) {
                this.setLevelAtIndex(i);
                return
            }
        }
        throw "No such level: " + level
    }

    setLevelAtIndex(index)
    {
        this.levelModifier = levelModifiers[index]
    }

    setMainStat(attribute, value)
    {
        this.attribute = attribute;
        this._mainValue = value;
    }

    setStats(weaponDamage, critical, directHit, determination, speed, tenacity = 380)
    {
        this._wd = weaponDamage;
        this._crt = critical;
        this._dh = directHit;
        this._det = determination;
        this._sks = speed;
        this._tnc = tenacity;
    }

    setTraitBoost(boost)
    {
        this._traitBoost = boost
    }

    getAttackDamage(potency)
    {
        let ap = Functions.attackPower(this._mainValue);
        let wd = Functions.weaponDamage(this, this.attribute, this._wd);
        let pot = Functions.potency(potency);
        let det = Functions.determination(this.levelModifier, this._det);
        let tnc = Functions.tenacity(this.levelModifier, this._tnc);
        let d1 = Math.floor(pot * wd * ap * det * tnc * this._traitBoost);

        let pdh = Functions.directHitProbability(this.levelModifier, this._dh);
        let pch = Functions.criticalHitProbability(this.levelModifier, this._crt);
        let chr = Functions.criticalHitRate(this.levelModifier, this._crt);

        let avg = Math.floor(d1 * pch * (chr - 1) + d1);
        avg = Math.floor(avg + avg * pdh * 0.25);

        let max = Math.floor(Math.floor(d1 * chr) * 1.25);

        return Calculator.applyBuffs({
            min: Math.floor(d1 * 0.95),
            avg: avg,
            max: Math.floor(1.05 * max)
        }, this._status.getBuffs());
    }

    getGCD(delay = 2500)
    {
        let gcdm = Math.floor(
            (1000 - Math.floor(130 * (this._sks - this.levelModifier.SUB) / this.levelModifier.DIV)) * delay / 1000
        );

        let a = Math.floor((100 - this._status.getTypeYSpeedModifier()) * (100 - this._status.getHasteModifier()) / 100);
        let b = (100 - this._status.getTypeZSpeedModifier()) / 100;

        let gcdc = Math.floor(
            Math.floor(
                Math.floor(Math.ceil(a * b) * gcdm / 100) * 100 / 1000
            ) * 100 / 100
        );

        return gcdc / 100
    }

    getAutoAttackDamage(delay)
    {
        let ap = Functions.attackPower(this._mainValue);
        let aa = Functions.autoAttack(this.levelModifier, this.jobModifier, this.attribute, this._wd, delay);
        let pot = Functions.potency(this._status.getAutoAttackPotency());
        let det = Functions.determination(this.levelModifier, this._det);
        let tnc = Functions.tenacity(this.levelModifier, this._tnc);
        let d1 = Math.floor(pot * aa * ap * det * tnc * this._traitBoost);

        let pdh = Functions.directHitProbability(this.levelModifier, this._dh);
        let pch = Functions.criticalHitProbability(this.levelModifier, this._crt);
        let chr = Functions.criticalHitRate(this.levelModifier, this._crt);

        let avg = Math.floor(d1 * pch * (chr - 1) + d1);
        avg = Math.floor(avg + avg * pdh * 0.25);

        let max = Math.floor(Math.floor(d1 * chr) * 1.25);

        return Calculator.applyBuffs({
            min: Math.floor(d1 * 0.95),
            avg: avg,
            max: Math.floor(1.05 * max)
        }, this._status.getBuffs());
    }

    static applyBuffs(damage, buffs)
    {
        for (let buff of buffs) {
            damage.min = Math.floor(damage.min * buff);
            damage.avg = Math.floor(damage.avg * buff);
            damage.max = Math.floor(damage.max * buff);
        }
        return damage
    }
}