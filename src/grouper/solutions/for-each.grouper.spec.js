"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var vitest_1 = require("vitest");
var for_each_grouper_1 = require("./for-each.grouper");
(0, vitest_1.describe)('grouper', function () {
    (0, vitest_1.it)('should group all objects by a property', function () {
        var given = [
            { name: 'Alice', age: 21 },
            { name: 'Max', age: 20 },
            { name: 'Jane', age: 20 }
        ];
        var actual = (0, for_each_grouper_1.grouper)(given);
        (0, vitest_1.expect)(actual).toEqual({
            20: ['Max', 'Jane'],
            21: ['Alice']
        });
    });
});
