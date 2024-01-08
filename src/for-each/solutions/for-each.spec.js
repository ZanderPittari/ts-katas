"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var vitest_1 = require("vitest");
var for_each_1 = require("./for-each");
(0, vitest_1.describe)('forEach', function () {
    (0, vitest_1.it)('should execute a callback for each iteration of a given array', function () {
        var given = [1, 2, 3];
        var total = 0;
        (0, for_each_1.forEach)(given, function () {
            total++;
        });
        (0, vitest_1.expect)(total).toBe(3);
    });
    (0, vitest_1.it)('should access the element it is iterating over', function () {
        var given = [1, 2, 3];
        var actual = [];
        (0, for_each_1.forEach)(given, function (element) {
            actual.push(element);
        });
        (0, vitest_1.expect)(actual).toEqual([1, 2, 3]);
    });
});
