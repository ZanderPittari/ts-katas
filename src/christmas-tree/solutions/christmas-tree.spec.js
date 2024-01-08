"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var vitest_1 = require("vitest");
var christmas_tree_1 = require("./christmas-tree");
vitest_1.describe.skip('ChristmasTree', function () {
    (0, vitest_1.it)('should render a tree with 3 rows', function () {
        var christmasTree = new christmas_tree_1.ChristmasTree();
        var actual = christmasTree.render(3);
        (0, vitest_1.expect)(actual).toBe("  *\n ***\n*****\n  |\n");
    });
});
