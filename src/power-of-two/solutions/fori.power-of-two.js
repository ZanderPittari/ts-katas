"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPoweredByTwo = void 0;
function getPoweredByTwo(numbers) {
    var powered = [];
    for (var i = 0; i < numbers.length; i++) {
        powered.push(Math.pow(numbers[i], 2));
    }
    return powered;
}
exports.getPoweredByTwo = getPoweredByTwo;
