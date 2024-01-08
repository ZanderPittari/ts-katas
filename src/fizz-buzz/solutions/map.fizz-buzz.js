"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mapFizzBuzz = void 0;
function mapFizzBuzz(number) {
    return Array.from({ length: number }, function (_, k) { return k + 1; }).map(function (x) {
        return x % 3 === 0 ? (x % 5 === 0 ? 'fizzbuzz' : 'fizz') : x % 5 === 0 ? 'buzz' : x;
    });
}
exports.mapFizzBuzz = mapFizzBuzz;
