"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var vitest_1 = require("vitest");
var alphabetical_1 = require("./alphabetical");
(0, vitest_1.describe)('alphabetical', function () {
    (0, vitest_1.it)('should sort alphabetically', function () {
        var given = ['javascript', 'java', 'python', 'lua'];
        var actual = (0, alphabetical_1.getAlphabeticallySorted)(given);
        (0, vitest_1.expect)(actual).toEqual(['java', 'javascript', 'lua', 'python']);
    });
});
