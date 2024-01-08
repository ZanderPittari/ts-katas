"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var vitest_1 = require("vitest");
var grouper_1 = require("./grouper");
(0, vitest_1.describe)('grouper', function () {
    (0, vitest_1.it)('should group all objects by a property', function () {
        var given = [
            { name: 'Alice', age: 21 },
            { name: 'Max', age: 20 },
            { name: 'Jane', age: 20 }
        ];
        var actual = (0, grouper_1.grouper)(given);
        (0, vitest_1.expect)(actual).toEqual({
            20: [
                { name: 'Max', age: 20 },
                { name: 'Jane', age: 20 }
            ],
            21: [{ name: 'Alice', age: 21 }]
        });
    });
});
