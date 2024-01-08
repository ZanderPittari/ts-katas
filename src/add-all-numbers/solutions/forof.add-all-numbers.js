"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTotal = void 0;
function getTotal(numbers) {
    var total = 0;
    for (var _i = 0, numbers_1 = numbers; _i < numbers_1.length; _i++) {
        var number = numbers_1[_i];
        total += number;
    }
    return total;
}
exports.getTotal = getTotal;
