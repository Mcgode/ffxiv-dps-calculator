/**
 * @file calculator.js
 * @author Max Godefroy <max@godefroy.net>
 */

import jobModifiers from './data/jobModifiers'
import levelModifiers from './data/levelModifiers'
import * as Functions from './functions'

export class Calculator
{
    getDamage(potency) {
        let pot = Functions.potency(potency);
        return pot * 1
    }
}