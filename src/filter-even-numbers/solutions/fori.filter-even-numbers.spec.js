"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var vitest_1 = require("vitest");
var fori_filter_even_numbers_1 = require("./fori.filter-even-numbers");
(0, vitest_1.describe)('filterEvenNumbers', function () {
    (0, vitest_1.it)('should filter the even numbers', function () {
        var given = [1, 24, 3, 8, 10];
        var actual = (0, fori_filter_even_numbers_1.getEvenNumbers)(given);
        (0, vitest_1.expect)(actual).toEqual([24, 8, 10]);
    });
});
