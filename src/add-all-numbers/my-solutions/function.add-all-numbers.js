"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addTogether = void 0;
function addTogether(numberArray) {
    var finalNumber = 0;
    for (var i = 0; i < numberArray.length; i++) {
        var element = numberArray[i];
        finalNumber += numberArray[i];
    }
    return finalNumber;
}
exports.addTogether = addTogether;
