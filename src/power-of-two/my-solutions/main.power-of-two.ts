import { power2 } from './function.power-of-two'

let numbers: number[] = []

let max = 100
let min = 50
for (let i = 0; i <= Math.floor(Math.random() * (max - min + 1)) + min; i++) {
  numbers.push(Math.floor(Math.random() * (max - min + 1)) + min)
}

console.log(numbers)

for (let i = 0; i < numbers.length; i++) {
  const element = numbers[i]
  numbers[i] = power2(numbers[i])
}

console.log(numbers)
