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