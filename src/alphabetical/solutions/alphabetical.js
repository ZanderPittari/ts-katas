"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAlphabeticallySorted = void 0;
function getAlphabeticallySorted(given) {
    return given.sort(function (a, b) { return a.localeCompare(b); });
}
exports.getAlphabeticallySorted = getAlphabeticallySorted;
