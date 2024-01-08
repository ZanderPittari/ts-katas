"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BeerSong = void 0;
var BeerSong = /** @class */ (function () {
    function BeerSong() {
    }
    BeerSong.prototype.sing = function (from, to) {
        if (to === void 0) { to = 0; }
        return this.range(from, to).map(this.verse).join('\n');
    };
    BeerSong.prototype.verse = function (number) {
        switch (number) {
            case 0:
                return "No more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.\n";
            case 1:
                return "1 bottle of beer on the wall, 1 bottle of beer.\nTake it down and pass it around, no more bottles of beer on the wall.\n";
            case 2:
                return "2 bottles of beer on the wall, 2 bottles of beer.\nTake one down and pass it around, 1 bottle of beer on the wall.\n";
            default:
                return "".concat(number, " bottles of beer on the wall, ").concat(number, " bottles of beer.\nTake one down and pass it around, ").concat(number - 1, " bottles of beer on the wall.\n");
        }
    };
    BeerSong.prototype.range = function (start, end) {
        var offset = end === 0 ? 0 : start - 2;
        return Array.from({ length: start - end + 1 }, function (_, k) { return k + offset; })
            .slice()
            .reverse();
    };
    return BeerSong;
}());
exports.BeerSong = BeerSong;
