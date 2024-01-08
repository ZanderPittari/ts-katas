"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var vitest_1 = require("vitest");
var reduce_add_all_numbers_1 = require("./reduce.add-all-numbers");
(0, vitest_1.describe)('addAllNumbers', function () {
    (0, vitest_1.it)('should add all the numbers', function () {
        var given = [1, 2, 3];
        var actual = (0, reduce_add_all_numbers_1.getTotal)(given);
        (0, vitest_1.expect)(actual).toBe(6);
    });
});
