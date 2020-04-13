/**
 * @file calculator.js
 * @author Max Godefroy <max@godefroy.net>
 */

import jobModifiers from './data/jobModifiers'
import levelModifiers from './data/levelModifiers'
import * as Functions from './functions'

export class Calculator
{
    constructor()
    {
        this.setJob('PLD');
        this.setLevel(80);
        this.setMainStat('STR', 380);
        this.setStats(100, 380, 380, 380, 380, 380);
        this.setTraitBoost(1.);
    }

    setJob(jobName)
    {
        for (let i = 0; i < jobModifiers.length; i++) {
            if (jobModifiers[i].Job.toLowerCase() === jobName.toLowerCase()) {
                this.setJobAtIndex(i);
                return
            }
        }
        throw "No such job: " + jobName
    }

    setJobAtIndex(index)
    {
        this.jobModifier = jobModifiers[index]
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

    attackDamage(potency)
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

        return {
            min: Math.floor(d1 * 0.95),
            avg: avg,
            max: Math.floor(1.05 * max)
        };
    }
}