"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.min = exports.max = void 0;
exports.max = 100;
exports.min = 50;
var arrayNumbers = [];
var evenNumbers = [];
for (var i = 0; i < Math.floor(Math.random() * (exports.max - exports.min + 1)) + exports.min; i++) {
    arrayNumbers.push(Math.floor(Math.random() * (exports.max - exports.min + 1)) + exports.min);
}
function isEven(inputNumber, index, inputArray) {
    if (inputNumber % 2 == 0) {
        evenNumbers.push(inputNumber);
    }
}
console.log(arrayNumbers);
arrayNumbers.forEach(isEven);
console.log(evenNumbers);
