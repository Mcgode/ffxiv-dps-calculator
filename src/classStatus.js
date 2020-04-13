/**
 * @file classStatus.js
 * @author Max Godefroy <max@godefroy.net>
 */

export class ClassStatus
{
    constructor() {
        this._currentTime = 0
    }

    incrementTimeByTime(time) {
        this._currentTime += time
    }

    noticeUseOfSkill(skill) {}

    getAutoAttackPotency() { return 100; }

    getBuffs() { return [] }

    getTypeYSpeedModifier() { return 0 }

    getTypeZSpeedModifier() { return 0 }

    getHasteModifier() { return 0 }
}