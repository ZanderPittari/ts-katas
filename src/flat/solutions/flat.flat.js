"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.flat = void 0;
function flat() {
    var arrays = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        arrays[_i] = arguments[_i];
    }
    return arrays.flat(Infinity);
}
exports.flat = flat;
