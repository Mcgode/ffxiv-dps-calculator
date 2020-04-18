/**
 * @file calculator.js
 * @author Max Godefroy <max@godefroy.net>
 */

import { Job } from "./internal";
import levelModifiers from './data/levelModifiers'
import * as Functions from './functions'


export class Calculator
{
    constructor()
    {
        this.setJob('PLD');
        this.setLevel(80);
    }

    setJob(jobName)
    {
        this.job = Job.getJob(jobName)
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

    getAttackDamage(potency)
    {
        return this._getDamage(Functions.potency(potency))
    }

    getGCD(delay = 2500)
    {
        let gcdm = Math.floor(
            (1000 - Math.floor(130 * (this.job.skillSpeed() - this.levelModifier.SUB) / this.levelModifier.DIV)) * delay / 1000
        );

        let a = Math.floor((100 - this.job.status().getTypeYSpeedModifier()) * (100 - this.job.status().getHasteModifier()) / 100);
        let b = (100 - this.job.status().getTypeZSpeedModifier()) / 100;

        let gcdc = Math.floor(
            Math.floor(
                Math.floor(Math.ceil(a * b) * gcdm / 100) * 100 / 1000
            ) * 100 / 100
        );

        return gcdc / 100
    }

    getAutoAttackDamage()
    {
        let aaPot = this.job.getAutoAttackPotency();
        if (aaPot === 0)
            return { min: 0, avg: 0, max: 0 };

        let pot = Functions.potency(aaPot);

        return this._getDamage(pot)
    }


    _getDamage(pot)
    {
        let ap = Functions.attackPower(this.job.mainStat());
        let aa = Functions.autoAttack(this.levelModifier, this.job.jobMod(), this.job.mainAttribute(),
            this.job.weaponDamage(), this.job.weaponDelay());
        let det = Functions.determination(this.levelModifier, this.job.determination());
        let tnc = Functions.tenacity(this.levelModifier, this.job.tenacity());
        let d1 = Math.floor(pot * aa * ap * det * tnc * this.job.traitModifier());

        let pdh = Functions.directHitProbability(this.levelModifier, this.job.directHit());
        pdh = this.job.status().applyDirectHitProbabilityBuff(pdh);
        let pch = Functions.criticalHitProbability(this.levelModifier, this.job.critical());
        pch = this.job.status().applyCriticalHitProbabilityBuff(pch);
        let chr = Functions.criticalHitRate(this.levelModifier, this.job.critical());

        let avg = Math.floor(d1 * pch * (chr - 1) + d1);
        avg = Math.floor(avg + avg * pdh * 0.25);

        let max = Math.floor(Math.floor(d1 * chr) * 1.25);

        return Calculator.applyBuffs({
            min: Math.floor(d1 * 0.95),
            avg: avg,
            max: Math.floor(1.05 * max)
        }, this.job.status().getDirectDamageBuffs());
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