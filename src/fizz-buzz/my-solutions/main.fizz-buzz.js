"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var function_fizz_buzz_1 = require("./function.fizz-buzz");
var arrayNumbers = [];
var max = 100;
var min = 50;
for (var i = 0; i < (Math.floor(Math.random() * (max - min + 1) + min)); i++) {
    arrayNumbers.push(Math.floor(Math.random() * (max - min + 1)) + min);
}

console.log(arrayNumbers)

for (var i = 0; i < arrayNumbers.length; i++) {
    console.log((0, function_fizz_buzz_1.alterNumbers)(arrayNumbers[i]));
}
