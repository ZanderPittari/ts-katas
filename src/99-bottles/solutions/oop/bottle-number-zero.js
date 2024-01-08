"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.BottleNumberZero = void 0;
var bottle_number_1 = require("./bottle-number");
var BottleNumberZero = /** @class */ (function (_super) {
    __extends(BottleNumberZero, _super);
    function BottleNumberZero() {
        return _super.call(this, 0) || this;
    }
    BottleNumberZero.prototype.quantity = function () {
        return 'no more';
    };
    BottleNumberZero.prototype.action = function () {
        return 'Go to the store and buy some more';
    };
    BottleNumberZero.prototype.successor = function () {
        return 99;
    };
    return BottleNumberZero;
}(bottle_number_1.BottleNumber));
exports.BottleNumberZero = BottleNumberZero;
