"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var vitest_1 = require("vitest");
var bottles_1 = require("./bottles");
(0, vitest_1.describe)('BeerSong', function () {
    var song = new bottles_1.Bottles();
    (0, vitest_1.it)('prints an arbitrary verse', function () {
        var expected = '8 bottles of beer on the wall, 8 bottles of beer.\nTake one down and pass it around, 7 bottles of beer on the wall.\n';
        var actual = song.verse(8);
        (0, vitest_1.expect)(actual).toEqual(expected);
    });
    (0, vitest_1.it)('handles 2 bottles', function () {
        var expected = '2 bottles of beer on the wall, 2 bottles of beer.\nTake one down and pass it around, 1 bottle of beer on the wall.\n';
        var actual = song.verse(2);
        (0, vitest_1.expect)(actual).toEqual(expected);
    });
    (0, vitest_1.it)('handles 1 bottle', function () {
        var expected = '1 bottle of beer on the wall, 1 bottle of beer.\nTake it down and pass it around, no more bottles of beer on the wall.\n';
        var actual = song.verse(1);
        (0, vitest_1.expect)(actual).toEqual(expected);
    });
    (0, vitest_1.it)('handles 0 bottles', function () {
        var expected = 'No more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.\n';
        var actual = song.verse(0);
        (0, vitest_1.expect)(actual).toEqual(expected);
    });
    (0, vitest_1.it)('sings several verses', function () {
        var expected = '8 bottles of beer on the wall, 8 bottles of beer.\nTake one down and pass it around, 7 bottles of beer on the wall.\n\n7 bottles of beer on the wall, 7 bottles of beer.\nTake one down and pass it around, 6 bottles of beer on the wall.\n\n6 bottles of beer on the wall, 6 bottles of beer.\nTake one down and pass it around, 5 bottles of beer on the wall.\n';
        var actual = song.sing(8, 6);
        (0, vitest_1.expect)(actual).toEqual(expected);
    });
    (0, vitest_1.it)('sings the rest of the verses', function () {
        var expected = '3 bottles of beer on the wall, 3 bottles of beer.\nTake one down and pass it around, 2 bottles of beer on the wall.\n\n2 bottles of beer on the wall, 2 bottles of beer.\nTake one down and pass it around, 1 bottle of beer on the wall.\n\n1 bottle of beer on the wall, 1 bottle of beer.\nTake it down and pass it around, no more bottles of beer on the wall.\n\nNo more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.\n';
        var actual = song.sing(3);
        (0, vitest_1.expect)(actual).toEqual(expected);
    });
});
