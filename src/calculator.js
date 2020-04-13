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
        this.jobModifier = jobModifiers[0];
        this.levelModifier = levelModifiers[0];
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
        this.mainValue = value;
    }

    setStats(weaponDamage, critical, directHit, determination, speed, tenacity = 380)
    {
        this._wd = weaponDamage;
        this._crt = critical;
        this._dh = directHit;
        this._det = determination;
        this._sks = speed;
        this._tnc = tenacity
    }

    attackDamage(potency)
    {
        let ap = Functions.attackPower(this.mainValue);
        let wd = Functions.weaponDamage(this, this.attribute, this._wd);
        let pot = Functions.potency(potency);
        let det = Functions.determination(this.levelModifier, this._det);
        let d1 = Math.floor(pot * wd * ap * det);
        return d1;
    }
}