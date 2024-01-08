"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var vitest_1 = require("vitest");
var reduce_flat_1 = require("./reduce.flat");
(0, vitest_1.describe)('flat', function () {
    (0, vitest_1.it)('should return the array as is if it is a single array', function () {
        var given = [1, 2];
        var actual = (0, reduce_flat_1.flat)(given);
        (0, vitest_1.expect)(actual).toEqual([1, 2]);
    });
    (0, vitest_1.it)('should stitch two different arrays', function () {
        var given = [
            [1, 2],
            [3, 4]
        ];
        var actual = reduce_flat_1.flat.apply(void 0, given);
        (0, vitest_1.expect)(actual).toEqual([1, 2, 3, 4]);
    });
    (0, vitest_1.it)('should stitch three different arrays', function () {
        var given = [
            [1, 2],
            [3, 4],
            [5, 6]
        ];
        var actual = reduce_flat_1.flat.apply(void 0, given);
        (0, vitest_1.expect)(actual).toEqual([1, 2, 3, 4, 5, 6]);
    });
});
