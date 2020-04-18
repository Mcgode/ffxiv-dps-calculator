/**
 * @file buff.js
 * @author Max Godefroy <max@godefroy.net>
 */

export class Buff
{
    constructor(buffType, value, duration = 10, start = 0) {
        this.type = buffType;
        this.value = value;
        this.duration = duration;
        this.start = start;
    }

    static buffType() {
        return {
            DAMAGE_UP: "damage_up",
            DAMAGE_DOWN: "damage_down",
            DIRECT_HIT_PROBABILITY_UP: "direct_hit_prob_up",
            CRITICAL_HIT_PROBABILITY_UP: "critical_hit_prob_up",
            DIRECT_AND_CRITICAL_HIT_PROBABILITY_UP: "direct_and_critical_hit_prob_up",
        }
    }
}