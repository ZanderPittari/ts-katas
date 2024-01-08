"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var vitest_1 = require("vitest");
var word_wrap_1 = require("./word-wrap");
(0, vitest_1.describe)('WordWrapper', function () {
    (0, vitest_1.it)('should add a new line when the text does not fit inside the given column length', function () {
        var wordWrapper = setup().wordWrapper;
        var text = 'ab';
        var columnLength = 1;
        var actual = wordWrapper.wrap(text, columnLength);
        (0, vitest_1.expect)(actual).toBe('a\nb');
    });
    (0, vitest_1.it)('should add as many new lines as needed so the text never overflows the given column length', function () {
        var wordWrapper = setup().wordWrapper;
        var text = 'abc';
        var columnLength = 1;
        var actual = wordWrapper.wrap(text, columnLength);
        (0, vitest_1.expect)(actual).toBe('a\nb\nc');
    });
});
function setup() {
    return {
        longText: 'abc',
        wordWrapper: new word_wrap_1.WordWrapper()
    };
}
