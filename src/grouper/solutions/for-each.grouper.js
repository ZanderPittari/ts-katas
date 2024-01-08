"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.grouper = void 0;
function grouper(people) {
    var partyByAge = {};
    people.forEach(function (person) {
        if (partyByAge[person.age] === undefined) {
            partyByAge[person.age] = [];
        }
        partyByAge[person.age].push(person.name);
        /*if (partyByAge[person.age] === undefined) {
          partyByAge[person.age] = []
          partyByAge[person.age].push(person.name)
        } else {
          partyByAge[person.age].push(person.name)
        }*/
    });
    return partyByAge;
}
exports.grouper = grouper;
