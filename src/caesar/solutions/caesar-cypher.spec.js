"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var vitest_1 = require("vitest");
var caesar_cypher_1 = require("./caesar-cypher");
(0, vitest_1.describe)('cypher', function () {
    (0, vitest_1.it)('should shift by one position', function () {
        var given = 'abc';
        var actual = (0, caesar_cypher_1.cypher)(given, 1);
        (0, vitest_1.expect)(actual).toBe('bdf');
    });
    (0, vitest_1.it)('should shift by two positions initially', function () {
        var given = 'abc';
        var actual = (0, caesar_cypher_1.cypher)(given, 2);
        (0, vitest_1.expect)(actual).toBe('ceg');
    });
    (0, vitest_1.it)('should handle overflow of the alphabet', function () {
        var given = 'xyz';
        var actual = (0, caesar_cypher_1.cypher)(given, 1);
        (0, vitest_1.expect)(actual).toBe('yac');
    });
});
