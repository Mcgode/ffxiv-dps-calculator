/**
 * @file jobs/drg/status.js
 * @author Max Godefroy <max@godefroy.net>
 */

import { JobStatus } from "../../internal";


export class DragoonStatus extends JobStatus
{
    constructor()
    {
        super();
    }

    getAutoAttackPotency()
    {
        return 110;
    }
}