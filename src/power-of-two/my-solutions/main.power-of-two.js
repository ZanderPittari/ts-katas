"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var function_power_of_two_1 = require("./function.power-of-two");
var numbers = [];
var max = 100;
var min = 50;
for (var i = 0; i <= Math.floor(Math.random() * (max - min + 1)) + min; i++) {
    numbers.push(Math.floor(Math.random() * (max - min + 1)) + min);
}
console.log(numbers);
for (var i = 0; i < numbers.length; i++) {
    var element = numbers[i];
    numbers[i] = (0, function_power_of_two_1.power2)(numbers[i]);
}
console.log(numbers);
