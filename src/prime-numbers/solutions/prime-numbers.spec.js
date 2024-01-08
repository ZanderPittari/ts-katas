"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var vitest_1 = require("vitest");
var prime_numbers_1 = require("./prime-numbers");
(0, vitest_1.describe)('PrimeNumbersFactorer', function () {
    (0, vitest_1.it)('should factor a number into prime numbers', function () {
        var given = 6;
        var primeNumbersFactorer = new prime_numbers_1.PrimeNumbersFactorer();
        var actual = primeNumbersFactorer.factor(given);
        (0, vitest_1.expect)(actual).toEqual([2, 3]);
    });
    (0, vitest_1.it)('should factor a number into prime numbers with non sequential values', function () {
        var given = 10;
        var primeNumbersFactorer = new prime_numbers_1.PrimeNumbersFactorer();
        var actual = primeNumbersFactorer.factor(given);
        (0, vitest_1.expect)(actual).toEqual([2, 5]);
    });
    (0, vitest_1.it)('should factor a number into prime numbers with more than 2 primes', function () {
        var given = 70;
        var primeNumbersFactorer = new prime_numbers_1.PrimeNumbersFactorer();
        var actual = primeNumbersFactorer.factor(given);
        (0, vitest_1.expect)(actual).toEqual([2, 5, 7]);
    });
    (0, vitest_1.it)('should factor a number into prime numbers with sequential prime numbers', function () {
        var given = 12;
        var primeNumbersFactorer = new prime_numbers_1.PrimeNumbersFactorer();
        var actual = primeNumbersFactorer.factor(given);
        (0, vitest_1.expect)(actual).toEqual([2, 2, 3]);
    });
    (0, vitest_1.it)('should factor a complex number into prime numbers', function () {
        var given = 9327186;
        var primeNumbersFactorer = new prime_numbers_1.PrimeNumbersFactorer();
        var actual = primeNumbersFactorer.factor(given);
        (0, vitest_1.expect)(actual).toEqual([2, 3, 3, 11, 17, 17, 163]);
    });
});
