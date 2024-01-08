"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getEvenNumbers = void 0;
function getEvenNumbers(numbers) {
    var evenNumbers = [];
    for (var _i = 0, numbers_1 = numbers; _i < numbers_1.length; _i++) {
        var number = numbers_1[_i];
        if (number % 2 === 0) {
            evenNumbers.push(number);
        }
    }
    return evenNumbers;
}
exports.getEvenNumbers = getEvenNumbers;
