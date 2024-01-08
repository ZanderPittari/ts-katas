"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.forEach = void 0;
function forEach(values, callback) {
    for (var i = 0; i < values.length; i++) {
        callback(values[i]);
    }
}
exports.forEach = forEach;
