"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getEvenNumbers = void 0;
function getEvenNumbers(numbers) {
    return numbers.filter(function (x) { return x % 2 === 0; });
}
exports.getEvenNumbers = getEvenNumbers;
