"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getHighestNumber = void 0;
function getHighestNumber(numbers) {
    return numbers
        .slice()
        .sort(function (a, b) { return a - b; })
        .reverse()[0];
}
exports.getHighestNumber = getHighestNumber;
