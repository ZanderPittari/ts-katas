"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cypher = void 0;
function cypher(message, shiftedBy) {
    var alphabet = 'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz';
    var cypheredMessage = '';
    for (var i = 0; i < message.length; i++) {
        var index = alphabet.indexOf(message[i]) + i + shiftedBy;
        var nextLetter = alphabet[index];
        cypheredMessage += nextLetter;
    }
    return cypheredMessage;
}
exports.cypher = cypher;
