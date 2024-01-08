"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BeerSong = void 0;
var BeerSong = /** @class */ (function () {
    function BeerSong() {
    }
    BeerSong.prototype.verse = function (number) {
        switch (number) {
            case 2:
                return '2 bottles of beer on the wall, 2 bottles of beer.\nTake one down and pass it around, 1 bottle of beer on the wall.\n';
            case 1:
                return '1 bottle of beer on the wall, 1 bottle of beer.\nTake it down and pass it around, no more bottles of beer on the wall.\n';
            case 0:
                return 'No more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.\n';
            default:
                return "".concat(number, " bottles of beer on the wall, ").concat(number, " bottles of beer.\nTake one down and pass it around, ").concat(number - 1, " bottles of beer on the wall.\n");
        }
    };
    BeerSong.prototype.sing = function (starting, ending) {
        if (ending === void 0) { ending = 0; }
        var song = [];
        for (var i = starting; i >= ending; i--) {
            song.push(this.verse(i));
        }
        return song.join('\n');
    };
    return BeerSong;
}());
exports.BeerSong = BeerSong;
