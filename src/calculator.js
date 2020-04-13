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
            console.log(jobModifiers[i]);
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
            console.log(levelModifiers[i]);
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

    getDamage(potency)
    {
        let pot = Functions.potency(potency);
        return pot * 1
    }
}