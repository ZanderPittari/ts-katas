"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTotal = void 0;
function getTotal(given) {
    return given.reduce(function (sum, number) { return sum + number; }, 0);
}
exports.getTotal = getTotal;
