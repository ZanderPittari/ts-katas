"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var vitest_1 = require("vitest");
var map_power_of_two_1 = require("./map.power-of-two");
(0, vitest_1.describe)('getPoweredByTwo', function () {
    (0, vitest_1.it)('should obtain the power of 2 for a given number of elements', function () {
        var given = [1, 2, 3];
        var actual = (0, map_power_of_two_1.getPoweredByTwo)(given);
        (0, vitest_1.expect)(actual).toEqual([1, 4, 9]);
    });
});
