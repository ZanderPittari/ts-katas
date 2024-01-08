"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getHighestNumber = void 0;
function getHighestNumber(numbers) {
    var highestNumber = numbers[0];
    for (var _i = 0, numbers_1 = numbers; _i < numbers_1.length; _i++) {
        var number = numbers_1[_i];
        if (number > highestNumber) {
            highestNumber = number;
        }
    }
    return highestNumber;
}
exports.getHighestNumber = getHighestNumber;
