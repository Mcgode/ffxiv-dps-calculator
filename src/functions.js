/**
 * @file functions.js
 * @author Max Godefroy <max@godefroy.net>
 */


export function potency(value)
{
    return value / 100
}

export function weaponDamage(calculator, attribute, weaponDamageValue)
{
    return Math.floor(calculator.levelModifier.MAIN * calculator.jobModifier[attribute] / 1000 + weaponDamageValue)
}

export function attackPower(value)
{
    return Math.floor(125 * (value - 292) / 292 + 100) / 100
}

export function determination(levelModifier, value)
{
    return Math.floor(130 * (value - levelModifier.MAIN) / levelModifier.DIV + 1000) / 1000
}

export function tenacity(levelModifier, tnc)
{
    return Math.floor(100 * (tnc - levelModifier.SUB) / levelModifier.DIV + 1000) / 1000
}

export function speed(levelModifier, ss)
{
    return Math.floor(130 * (ss - levelModifier.SUB) / levelModifier.DIV + 1000) / 1000
}

export function directHitProbability(levelModifier, dh)
{
    return Math.floor(550 * (dh - levelModifier.SUB) / levelModifier.DIV) / 1000
}

export function criticalHitProbability(levelModifier, crit)
{
    return Math.floor(200 * (crit - levelModifier.SUB) / levelModifier.DIV + 50) / 1000
}

export function criticalHitRate(levelModifier, crit)
{
    return Math.floor(200 * (crit - levelModifier.SUB) / levelModifier.DIV + 1400) / 1000
}