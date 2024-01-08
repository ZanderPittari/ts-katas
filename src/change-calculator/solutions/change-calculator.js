"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChangeCalculator = void 0;
var ChangeCalculator = /** @class */ (function () {
    function ChangeCalculator() {
        this.moneyAmounts = new Map([
            [500, 1],
            [200, 1],
            [100, 1],
            [50, 1],
            [20, 1],
            [10, 1],
            [5, 1],
            [2, 1],
            [1, 1]
        ]);
    }
    ChangeCalculator.prototype.calculate = function (money, result) {
        var _a;
        if (result === void 0) { result = []; }
        var moneyAmount = this.moneyAmounts.get(money);
        var amounts = Array.from(this.moneyAmounts);
        var _b = (_a = amounts.find(function (_a) {
            var amount = _a[0], quantity = _a[1];
            return amount <= money && quantity > 0;
        })) !== null && _a !== void 0 ? _a : [0, 0], immediateBelowMoneyAmount = _b[0], immediateBelowMoneyQuantity = _b[1];
        result.push(immediateBelowMoneyAmount);
        this.moneyAmounts.set(immediateBelowMoneyAmount, immediateBelowMoneyQuantity - 1);
        if (moneyAmount !== undefined && moneyAmount !== 0) {
            return result;
        }
        return this.calculate(money - immediateBelowMoneyAmount, result);
    };
    ChangeCalculator.prototype.configureAmounts = function (newAmounts) {
        this.moneyAmounts = newAmounts;
    };
    return ChangeCalculator;
}());
exports.ChangeCalculator = ChangeCalculator;
