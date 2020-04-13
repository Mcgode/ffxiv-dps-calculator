(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (factory((global.DPSCalculator = {})));
}(this, (function (exports) { 'use strict';

    /**
     * @file functions.js
     * @author Max Godefroy <max@godefroy.net>
     */


    function potency(value)
    {
        return value / 100
    }

    /**
     * @file calculator.js
     * @author Max Godefroy <max@godefroy.net>
     */

    class Calculator
    {
        getDamage(potency$$1) {
            let pot = potency(potency$$1);
            return pot * 1
        }
    }

    exports.Calculator = Calculator;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
