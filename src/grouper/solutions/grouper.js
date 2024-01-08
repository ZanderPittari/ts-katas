"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.grouper = void 0;
function grouper(people) {
    return people.reduce(function (acc, x) {
        var age = acc[x.age];
        if (age === undefined) {
            acc[x.age] = [x];
        }
        else {
            age.push(x);
        }
        return acc;
    }, {});
}
exports.grouper = grouper;
