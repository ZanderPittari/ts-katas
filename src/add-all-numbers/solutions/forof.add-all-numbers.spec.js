"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var vitest_1 = require("vitest");
var forof_add_all_numbers_1 = require("./forof.add-all-numbers");
(0, vitest_1.describe)('forof.addAllNumbers', function () {
    (0, vitest_1.it)('should add all numbers', function () {
        var given = [3, 2, 1];
        var actual = (0, forof_add_all_numbers_1.getTotal)(given);
        (0, vitest_1.expect)(actual).toBe(6);
    });
    (0, vitest_1.it)('should add different numbers', function () {
        var given = [1, 2, 3, 4];
        var actual = (0, forof_add_all_numbers_1.getTotal)(given);
        (0, vitest_1.expect)(actual).toBe(10);
    });
});
