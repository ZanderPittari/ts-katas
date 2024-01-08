"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getEvenNumbers = void 0;
function getEvenNumbers(numbers) {
    var evenNumbers = [];
    for (var i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 === 0) {
            evenNumbers.push(numbers[i]);
        }
    }
    return evenNumbers;
}
exports.getEvenNumbers = getEvenNumbers;
