"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var vitest_1 = require("vitest");
var change_calculator_1 = require("./change-calculator");
(0, vitest_1.describe)('bank', function () {
    (0, vitest_1.it)('should return the minimum exact change', function () {
        var given = 50;
        var actual = new change_calculator_1.ChangeCalculator().calculate(given);
        (0, vitest_1.expect)(actual).toEqual([50]);
    });
    (0, vitest_1.it)('should return a set of money amounts if there is no exact change', function () {
        var given = 70;
        var actual = new change_calculator_1.ChangeCalculator().calculate(given);
        (0, vitest_1.expect)(actual).toEqual([50, 20]);
    });
    (0, vitest_1.it)('should return several bills of the same amount when it can', function () {
        var given = 100;
        var changeCalculator = new change_calculator_1.ChangeCalculator();
        changeCalculator.configureAmounts(new Map([
            [100, 0],
            [50, 2]
        ]));
        var actual = changeCalculator.calculate(given);
        (0, vitest_1.expect)(actual).toEqual([50, 50]);
    });
    (0, vitest_1.it)('should return several bills of the same amount when it can and other bills or coins', function () {
        var given = 105;
        var changeCalculator = new change_calculator_1.ChangeCalculator();
        changeCalculator.configureAmounts(new Map([
            [100, 0],
            [50, 2],
            [10, 1],
            [5, 0],
            [2, 2],
            [1, 1]
        ]));
        var actual = changeCalculator.calculate(given);
        (0, vitest_1.expect)(actual).toEqual([50, 50, 2, 2, 1]);
    });
});
