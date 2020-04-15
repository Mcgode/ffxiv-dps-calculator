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
        let ap = Functions.attackPower(this.job.mainStat());
        let wd = Functions.weaponDamage(this.levelModifier, this.job.jobMod(), this.job.mainAttribute(), this.job.weaponDamage());
        let pot = Functions.potency(potency);
        let det = Functions.determination(this.levelModifier, this.job.determination());
        let tnc = Functions.tenacity(this.levelModifier, this.job.tenacity());
        let d1 = Math.floor(pot * wd * ap * det * tnc * this.job.traitModifier());

        let pdh = Functions.directHitProbability(this.levelModifier, this.job.directHit());
        let pch = Functions.criticalHitProbability(this.levelModifier, this.job.critical());
        let chr = Functions.criticalHitRate(this.levelModifier, this.job.critical());

        let avg = Math.floor(d1 * pch * (chr - 1) + d1);
        avg = Math.floor(avg + avg * pdh * 0.25);

        let max = Math.floor(Math.floor(d1 * chr) * 1.25);

        return Calculator.applyBuffs({
            min: Math.floor(d1 * 0.95),
            avg: avg,
            max: Math.floor(1.05 * max)
        }, this.job.status().getBuffs());
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
        let ap = Functions.attackPower(this.job.mainStat());
        let aa = Functions.autoAttack(this.levelModifier, this.job.jobMod(), this.job.mainAttribute(),
                                      this.job.weaponDamage(), this.job.weaponDelay());
        let pot = Functions.potency(this.job.status().getAutoAttackPotency());
        let det = Functions.determination(this.levelModifier, this.job.determination());
        let tnc = Functions.tenacity(this.levelModifier, this.job.tenacity());
        let d1 = Math.floor(pot * aa * ap * det * tnc * this.job.traitModifier());

        let pdh = Functions.directHitProbability(this.levelModifier, this.job.directHit());
        let pch = Functions.criticalHitProbability(this.levelModifier, this.job.critical());
        let chr = Functions.criticalHitRate(this.levelModifier, this.job.critical());

        let avg = Math.floor(d1 * pch * (chr - 1) + d1);
        avg = Math.floor(avg + avg * pdh * 0.25);

        let max = Math.floor(Math.floor(d1 * chr) * 1.25);

        return Calculator.applyBuffs({
            min: Math.floor(d1 * 0.95),
            avg: avg,
            max: Math.floor(1.05 * max)
        }, this.job.status().getBuffs());
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