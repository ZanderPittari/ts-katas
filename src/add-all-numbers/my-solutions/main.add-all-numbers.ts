import { addTogether } from './function.add-all-numbers'

let numberArray: number[] = []
let max = 100
let min = 50

for (let i = 0; Math.floor(Math.random() * (max - min + 1)) + min; i++) {
  numberArray.push(Math.floor(Math.random() * (max - min + 1) + min))
}

console.log(numberArray)
console.log(addTogether(numberArray))
