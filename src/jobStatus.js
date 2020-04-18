/**
 * @file classStatus.js
 * @author Max Godefroy <max@godefroy.net>
 */

import {Buff} from "./buff";

export class JobStatus
{
    constructor() {
        this._currentTime = 0;
        this._currentBuffs = []
    }

    incrementTimeBy(time) {
        this._currentTime += time
    }

    noticeUseOfSkill(skill) {}

    getDirectDamageBuffs()
    {
        let buffsToApply = [];

        for (let buff of this._currentBuffs)
        {
            switch (buff.type) {
                case Buff.buffType().DAMAGE_UP:
                case Buff.buffType().DAMAGE_DOWN:
                    if (buff.start <= this._currentTime && buff.start + buff.duration >= this._currentTime) {
                        buffsToApply.push(buff.value);
                    }
            }
        }

        return buffsToApply
    }

    applyDirectHitProbabilityBuff(directHitProbability)
    {
        for (let buff of this._currentBuffs)
        {
            switch (buff.type) {
                case Buff.buffType().DIRECT_HIT_PROBABILITY_UP:
                case Buff.buffType().DIRECT_AND_CRITICAL_HIT_PROBABILITY_UP:
                    if (buff.start <= this._currentTime && buff.start + buff.duration >= this._currentTime) {
                        directHitProbability += buff.value;
                    }
            }
        }
        return Math.min(directHitProbability, 1.0)
    }

    applyCriticalHitProbabilityBuff(criticalHitProbability)
    {
        for (let buff of this._currentBuffs)
        {
            switch (buff.type) {
                case Buff.buffType().CRITICAL_HIT_PROBABILITY_UP:
                case Buff.buffType().DIRECT_AND_CRITICAL_HIT_PROBABILITY_UP:
                    if (buff.start <= this._currentTime && buff.start + buff.duration >= this._currentTime) {
                        criticalHitProbability += buff.value;
                    }
            }
        }
        return Math.min(criticalHitProbability, 1.0)
    }

    getTypeYSpeedModifier() { return 0 }

    getTypeZSpeedModifier() { return 0 }

    getHasteModifier() { return 0 }
}