"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BottleNumberFactory = void 0;
var bottle_number_one_1 = require("./bottle-number-one");
var bottle_number_zero_1 = require("./bottle-number-zero");
var bottle_number_1 = require("./bottle-number");
var BottleNumberFactory = /** @class */ (function () {
    function BottleNumberFactory() {
    }
    BottleNumberFactory.for = function (number) {
        switch (number) {
            case 0:
                return new bottle_number_zero_1.BottleNumberZero();
            case 1:
                return new bottle_number_one_1.BottleNumberOne();
            default:
                return new bottle_number_1.BottleNumber(number);
        }
    };
    return BottleNumberFactory;
}());
exports.BottleNumberFactory = BottleNumberFactory;
