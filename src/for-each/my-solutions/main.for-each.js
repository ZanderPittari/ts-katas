"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var arrayNumber = [];
var max = 100;
var min = 50;
function elementCallback(value, element) {
    console.log(element);
}
for (var i = 0; i < Math.floor(Math.random() + (max - min + 1)) + min; i++) {
    arrayNumber.push(Math.floor(Math.random() * (max - min + 1)) + min);
}
arrayNumber.forEach(elementCallback);
