"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var vitest_1 = require("vitest");
var sort_highest_number_1 = require("./sort.highest-number");
(0, vitest_1.describe)('getHighestNumber', function () {
    (0, vitest_1.it)('should get the highest number given an array of one number', function () {
        var given = [42];
        var actual = (0, sort_highest_number_1.getHighestNumber)(given);
        (0, vitest_1.expect)(actual).toBe(42);
    });
    (0, vitest_1.it)('should get the highest number given an array of several numbers', function () {
        var given = [1, 3, 2];
        var actual = (0, sort_highest_number_1.getHighestNumber)(given);
        (0, vitest_1.expect)(actual).toBe(3);
    });
});
