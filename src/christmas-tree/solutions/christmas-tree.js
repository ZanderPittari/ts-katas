"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChristmasTree = void 0;
var ChristmasTree = /** @class */ (function () {
    function ChristmasTree() {
    }
    ChristmasTree.prototype.render = function (rows) {
        var maxStarsPerRow = rows + rows - 1;
        var treeArr = [];
        for (var i = 0; i < rows; i++) {
            var currentStarsInRow = i + i + 1;
            var row = '';
            for (var j = 0; j < currentStarsInRow; j++) {
                row += '*';
            }
            treeArr.push(row);
        }
        var finalTree = treeArr
            .map(function (x, i) {
            var paddedSpaces = Math.floor(maxStarsPerRow / 2) + i * -1;
            return x.padStart(paddedSpaces).padEnd(paddedSpaces);
        })
            .join('\n');
        return this.addTrunk(maxStarsPerRow, finalTree + '\n');
    };
    ChristmasTree.prototype.addTrunk = function (maxStarsPerRow, tree) {
        var lastRow = '';
        var half = Math.floor(maxStarsPerRow / 2);
        for (var i = 0; i < maxStarsPerRow; i++) {
            var isHalf = i === half;
            if (isHalf) {
                lastRow += '|';
            }
            else {
                lastRow += ' ';
            }
        }
        tree += lastRow + '\n';
        return tree;
    };
    return ChristmasTree;
}());
exports.ChristmasTree = ChristmasTree;
