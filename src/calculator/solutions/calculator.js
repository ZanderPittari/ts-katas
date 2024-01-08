"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Calculator = void 0;
var Calculator = /** @class */ (function () {
    function Calculator() {
    }
    Calculator.prototype.calculate = function (string) {
        var cleanString = string.replace(/ /g, '');
        var sequence = this.getSequence(cleanString);
        var numbers = sequence.map(Number);
        return numbers.reduce(function (result, value) { return result + value; }, 0);
    };
    Calculator.prototype.getSequence = function (string) {
        var signedStringifiedNumber = '';
        var sequence = [];
        for (var _i = 0, string_1 = string; _i < string_1.length; _i++) {
            var char = string_1[_i];
            var isSignFound = ['+', '-'].includes(char);
            if (isSignFound) {
                sequence.push(signedStringifiedNumber);
                signedStringifiedNumber = '';
            }
            signedStringifiedNumber += char;
        }
        sequence.push(signedStringifiedNumber);
        return sequence;
    };
    return Calculator;
}());
exports.Calculator = Calculator;
