import { alterNumbers } from './function.fizz-buzz'
let arrayNumbers: any[] = []
let max = 100
let min = 50

for (let i = 0; i < Math.floor(Math.random() * (max - min + 1) + min); i++) {
  arrayNumbers.push(Math.floor(Math.random() * (max - min + 1)) + min)
}

for (let i = 0; i < arrayNumbers.length; i++) {
  console.log(alterNumbers(arrayNumbers[i]))
}
