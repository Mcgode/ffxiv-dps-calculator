/**
 * @file job.js
 * @author Max Godefroy <max@godefroy.net>
 */

import { JobStatus, DragoonJob } from "./internal";
import jobModifiers from './data/jobModifiers'


export class Job
{
    constructor()
    {
        this._status = new JobStatus();
        this.setMainStatValue(380);
        this.setStats(100, 3,380, 380, 380, 380, 380);
    }

    static getJob(jobName)
    {
        switch (jobName) {
            case 'DRG':
                return new DragoonJob();
            default:
                return new Job()
        }
    }

    setMainStatValue(value)
    {
        this._mainValue = value;
    }

    setStats(weaponDamage, weaponDelay, critical, directHit, determination, speed, tenacity = 380)
    {
        this._wd = weaponDamage;
        this._wdel = weaponDelay;
        this._crt = critical;
        this._dh = directHit;
        this._det = determination;
        this._sks = speed;
        this._tnc = tenacity;
    }

    getAutoAttackPotency() {
        return 0;
    }

    mainAttribute()
    {
        return 'STR'
    }

    jobMod() {
        return jobModifiers[0]
    }

    mainStat()
    {
        return this._mainValue
    }

    weaponDamage()
    {
        return this._wd
    }

    weaponDelay()
    {
        return this._wdel
    }

    critical()
    {
        return this._crt
    }

    directHit()
    {
        return this._dh
    }

    determination()
    {
        return this._det
    }

    skillSpeed()
    {
        return this._sks
    }

    tenacity()
    {
        return this._tnc
    }

    traitModifier(level = 80)
    {
        return 1
    }

    status()
    {
        return this._status
    }
}