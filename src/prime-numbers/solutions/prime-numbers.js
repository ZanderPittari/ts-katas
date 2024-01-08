"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrimeNumbersFactorer = void 0;
var PrimeNumbersFactorer = /** @class */ (function () {
    function PrimeNumbersFactorer() {
    }
    PrimeNumbersFactorer.prototype.factor = function (number) {
        var primes = [];
        var FIRST_PRIME_NUMBER = 2;
        var divisor = FIRST_PRIME_NUMBER;
        while (number > FIRST_PRIME_NUMBER) {
            if (number % divisor === 0) {
                primes.push(divisor);
                number /= divisor;
            }
            else {
                divisor++;
            }
        }
        return primes;
    };
    return PrimeNumbersFactorer;
}());
exports.PrimeNumbersFactorer = PrimeNumbersFactorer;
