"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var vitest_1 = require("vitest");
var map_fizz_buzz_1 = require("./map.fizz-buzz");
(0, vitest_1.describe)('fizzBuzz', function () {
    (0, vitest_1.it)('should replace the 3 by fizz', function () {
        var given = 3;
        var actual = (0, map_fizz_buzz_1.mapFizzBuzz)(given);
        (0, vitest_1.expect)(actual).toEqual([1, 2, 'fizz']);
    });
    (0, vitest_1.it)('should replace the 5 by buzz', function () {
        var given = 5;
        var actual = (0, map_fizz_buzz_1.mapFizzBuzz)(given);
        (0, vitest_1.expect)(actual).toEqual([1, 2, 'fizz', 4, 'buzz']);
    });
    (0, vitest_1.it)('should replace all numbers whose modulus is 0 when divided by 3', function () {
        var given = 6;
        var actual = (0, map_fizz_buzz_1.mapFizzBuzz)(given);
        (0, vitest_1.expect)(actual).toEqual([1, 2, 'fizz', 4, 'buzz', 'fizz']);
    });
    (0, vitest_1.it)('should replace all numbers whose modulus is 0 when divided by 3 and 5 to fizzbuzz', function () {
        var given = 15;
        var result = (0, map_fizz_buzz_1.mapFizzBuzz)(given);
        (0, vitest_1.expect)(result).toEqual([
            1,
            2,
            'fizz',
            4,
            'buzz',
            'fizz',
            7,
            8,
            'fizz',
            'buzz',
            11,
            'fizz',
            13,
            14,
            'fizzbuzz'
        ]);
    });
});
