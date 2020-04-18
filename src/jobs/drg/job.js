/**
 * @file jobs/drg/job.js
 * @author Max Godefroy <max@godefroy.net>
 */


import {DragoonStatus, Job} from "../../internal";
import jobModifiers from '../../data/jobModifiers';


export class DragoonJob extends Job
{
    constructor()
    {
        super();
        this._status = new DragoonStatus();
        for (let jm of jobModifiers) {
            if (jm['Job'] === "DRG") {
                this._jm = jm;
                break;
            }
        }
    }

    jobMod() {
        return this._jm;
    }

    getAutoAttackPotency()
    {
        return 110;
    }
}