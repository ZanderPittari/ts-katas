"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fruitCounter = void 0;
function fruitCounter(fruits) {
    var fruitBasket = {};
    fruits.forEach(function (fruit) {
        if (fruitBasket[fruit] === undefined) {
            fruitBasket[fruit] = 0;
        }
        fruitBasket[fruit]++;
    });
    return fruitBasket;
}
exports.fruitCounter = fruitCounter;
