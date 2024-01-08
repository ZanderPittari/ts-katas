"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var vitest_1 = require("vitest");
var for_fizz_buzz_1 = require("./for.fizz-buzz");
(0, vitest_1.describe)('fizzBuzz', function () {
    (0, vitest_1.it)('should return a list whose length is the same as the initial number', function () {
        var given = 2;
        var actual = (0, for_fizz_buzz_1.fizzBuzz)(given);
        (0, vitest_1.expect)(actual).toHaveLength(2);
    });
    (0, vitest_1.it)('should replace fizz whenever there is a number that is divisible by 3', function () {
        var given = 3;
        var actual = (0, for_fizz_buzz_1.fizzBuzz)(given);
        (0, vitest_1.expect)(actual).toEqual([1, 2, 'fizz']);
    });
    (0, vitest_1.it)('should replace buzz whenever there is a number that is divisible by 5', function () {
        var given = 5;
        var actual = (0, for_fizz_buzz_1.fizzBuzz)(given);
        (0, vitest_1.expect)(actual).toEqual([1, 2, 'fizz', 4, 'buzz']);
    });
    (0, vitest_1.it)('should replace with fizzbuzz whenever there is a number that is divisible by 3 and by 5', function () {
        var given = 15;
        var actual = (0, for_fizz_buzz_1.fizzBuzz)(given);
        (0, vitest_1.expect)(actual).toEqual([
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
