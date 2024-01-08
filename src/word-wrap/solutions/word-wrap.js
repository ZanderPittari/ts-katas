"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WordWrapper = void 0;
var WordWrapper = /** @class */ (function () {
    function WordWrapper() {
    }
    WordWrapper.prototype.wrap = function (text, columnLength) {
        if (text.length <= columnLength) {
            return text;
        }
        var wrappedText = text.substring(0, columnLength) + '\n';
        var remainingText = text.substring(columnLength);
        return wrappedText + this.wrap(remainingText, columnLength);
    };
    return WordWrapper;
}());
exports.WordWrapper = WordWrapper;
