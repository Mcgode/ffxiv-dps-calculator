/**
 * @file classStatus.js
 * @author Max Godefroy <max@godefroy.net>
 */

export class JobStatus
{
    constructor() {
        this._currentTime = 0
    }

    incrementTimeBy(time) {
        this._currentTime += time
    }

    noticeUseOfSkill(skill) {}

    getBuffs() { return [] }

    getTypeYSpeedModifier() { return 0 }

    getTypeZSpeedModifier() { return 0 }

    getHasteModifier() { return 0 }
}