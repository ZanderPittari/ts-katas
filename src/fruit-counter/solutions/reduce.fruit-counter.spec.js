"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var vitest_1 = require("vitest");
var reduce_fruit_counter_1 = require("./reduce.fruit-counter");
(0, vitest_1.describe)('fruitCounter', function () {
    (0, vitest_1.it)('should return a count of all repeated elements', function () {
        var given = ['🍋', '🍉', '🍒', '🍋', '🍋', '🍎', '🍎', '🍐'];
        var actual = (0, reduce_fruit_counter_1.fruitCounter)(given);
        (0, vitest_1.expect)(actual).toEqual({
            '🍋': 3,
            '🍉': 1,
            '🍒': 1,
            '🍎': 2,
            '🍐': 1
        });
    });
});
