"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fruitCounter = void 0;
function fruitCounter(fruits) {
    return fruits.reduce(function (basket, fruit) {
        if (basket[fruit] === undefined) {
            basket[fruit] = 0;
        }
        basket[fruit]++;
        return basket;
    }, {});
}
exports.fruitCounter = fruitCounter;
