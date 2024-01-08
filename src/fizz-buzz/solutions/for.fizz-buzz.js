"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fizzBuzz = void 0;
function fizzBuzz(number) {
    var list = [];
    for (var i = 1; i <= number; i++) {
        var isDivisibleByThree = i % 3 === 0;
        var isDivisibleByFive = i % 5 === 0;
        var value = '';
        if (isDivisibleByThree) {
            value += 'fizz';
        }
        if (isDivisibleByFive) {
            value += 'buzz';
        }
        if (value === '') {
            value = i;
        }
        list.push(value);
    }
    return list;
}
exports.fizzBuzz = fizzBuzz;
