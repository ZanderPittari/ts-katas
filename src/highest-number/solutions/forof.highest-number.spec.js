"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var vitest_1 = require("vitest");
var forof_highest_number_1 = require("./forof.highest-number");
(0, vitest_1.describe)('getHighestNumber', function () {
    (0, vitest_1.it)('should get the only element in the list if there is only one element', function () {
        var given = [100];
        var actual = (0, forof_highest_number_1.getHighestNumber)(given);
        (0, vitest_1.expect)(actual).toBe(100);
    });
    (0, vitest_1.it)('should get the highest numbers amongst several numbers', function () {
        var given = [1, 2, 3];
        var actual = (0, forof_highest_number_1.getHighestNumber)(given);
        (0, vitest_1.expect)(actual).toBe(3);
    });
    (0, vitest_1.it)('should get the highest numbers amongst several negative numbers', function () {
        var given = [-1, -2, -3];
        var actual = (0, forof_highest_number_1.getHighestNumber)(given);
        (0, vitest_1.expect)(actual).toBe(-1);
    });
});
