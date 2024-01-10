"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.alterNumbers = void 0;
function alterNumbers(inputNumber) {
    if (inputNumber % 3 == 0 && inputNumber % 5 == 0) {
        inputNumber = 'fizzbuzz';
    }
    else if (inputNumber % 5 == 0) {
        inputNumber = 'buzz';
    }
    else if (inputNumber % 3 == 0) {
        inputNumber = 'fizz';
    }
    else {
        inputNumber = inputNumber;
    }
    return inputNumber;
}
exports.alterNumbers = alterNumbers;
