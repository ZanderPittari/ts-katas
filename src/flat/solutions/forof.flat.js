"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.flat = void 0;
function flat() {
    var arrays = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        arrays[_i] = arguments[_i];
    }
    var result = [];
    for (var _a = 0, arrays_1 = arrays; _a < arrays_1.length; _a++) {
        var array = arrays_1[_a];
        result.push.apply(result, array);
    }
    return result;
}
exports.flat = flat;
