"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bottles = void 0;
var bottle_number_factory_1 = require("./bottle-number-factory");
var Bottles = /** @class */ (function () {
    function Bottles() {
    }
    Bottles.prototype.sing = function (starting, ending) {
        var _this = this;
        if (ending === void 0) { ending = 0; }
        return this.range(starting, ending)
            .map(function (number) { return _this.verse(number); })
            .join('\n');
    };
    Bottles.prototype.verse = function (number) {
        var bottleNumber = bottle_number_factory_1.BottleNumberFactory.for(number);
        return (this.capitalizeWord("".concat(bottleNumber, " of beer on the wall, ")) +
            "".concat(bottleNumber, " of beer.\n") +
            "".concat(bottleNumber.action(), ", ") +
            "".concat(bottle_number_factory_1.BottleNumberFactory.for(bottleNumber.successor()), " of beer on the wall.\n"));
    };
    Bottles.prototype.range = function (start, end) {
        var offset = end === 0 ? 0 : start - 2;
        return Array.from({ length: start - end + 1 }, function (_, k) { return k + offset; })
            .slice()
            .reverse();
    };
    Bottles.prototype.capitalizeWord = function (string) {
        return string.substring(0, 1).toUpperCase() + string.substring(1);
    };
    return Bottles;
}());
exports.Bottles = Bottles;
