"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPoweredByTwo = void 0;
function getPoweredByTwo(numbers) {
    var powered = [];
    for (var _i = 0, numbers_1 = numbers; _i < numbers_1.length; _i++) {
        var number = numbers_1[_i];
        powered.push(Math.pow(number, 2));
    }
    return powered;
}
exports.getPoweredByTwo = getPoweredByTwo;
