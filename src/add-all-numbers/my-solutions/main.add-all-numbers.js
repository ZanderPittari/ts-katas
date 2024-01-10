"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var function_add_all_numbers_1 = require("./function.add-all-numbers");
var numberArray = [];
var max = 100;
var min = 20;
for (var i = 0; i <= Math.floor(Math.random() * (max - min + 1)) + min; i++) {
    numberArray.push(Math.floor(Math.random() * (max - min + 1) + min));
}
console.log(numberArray);
console.log((0, function_add_all_numbers_1.addTogether)(numberArray));
