"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BottleNumber = void 0;
var BottleNumber = /** @class */ (function () {
    function BottleNumber(number) {
        this.number = number;
    }
    BottleNumber.prototype.container = function () {
        return 'bottles';
    };
    BottleNumber.prototype.quantity = function () {
        return this.number.toString();
    };
    BottleNumber.prototype.action = function () {
        return "Take ".concat(this.pronoun(), " down and pass it around");
    };
    BottleNumber.prototype.pronoun = function () {
        return 'one';
    };
    BottleNumber.prototype.successor = function () {
        return this.number - 1;
    };
    BottleNumber.prototype.toString = function () {
        return "".concat(this.quantity(), " ").concat(this.container());
    };
    return BottleNumber;
}());
exports.BottleNumber = BottleNumber;
