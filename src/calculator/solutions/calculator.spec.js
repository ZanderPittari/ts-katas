"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var vitest_1 = require("vitest");
var calculator_1 = require("./calculator");
(0, vitest_1.describe)('Calculator', function () {
    (0, vitest_1.it)('should add two numbers', function () {
        var given = '2 + 2';
        var calculator = new calculator_1.Calculator();
        var actual = calculator.calculate(given);
        (0, vitest_1.expect)(actual).toBe(4);
    });
    (0, vitest_1.it)('should add more than two numbers', function () {
        var given = '2 + 2 + 1';
        var calculator = new calculator_1.Calculator();
        var actual = calculator.calculate(given);
        (0, vitest_1.expect)(actual).toBe(5);
    });
    (0, vitest_1.it)('should subtract two numbers', function () {
        var given = '2 - 2';
        var calculator = new calculator_1.Calculator();
        var actual = calculator.calculate(given);
        (0, vitest_1.expect)(actual).toBe(0);
    });
    (0, vitest_1.it)('should subtract more than two numbers', function () {
        var given = '2 - 2 - 5';
        var calculator = new calculator_1.Calculator();
        var actual = calculator.calculate(given);
        (0, vitest_1.expect)(actual).toBe(-5);
    });
    (0, vitest_1.it)('should perform multiple combined operations (adding and subtracting)', function () {
        var given = '2 - 2 + 5';
        var calculator = new calculator_1.Calculator();
        var actual = calculator.calculate(given);
        (0, vitest_1.expect)(actual).toBe(5);
    });
    (0, vitest_1.it)('should perform multiple combined operations (adding and subtracting) when it starts with a negative number', function () {
        var given = '-2 - 2 + 5';
        var calculator = new calculator_1.Calculator();
        var actual = calculator.calculate(given);
        (0, vitest_1.expect)(actual).toBe(1);
    });
});
