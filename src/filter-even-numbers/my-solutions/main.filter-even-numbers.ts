export let max = 100
export let min = 50
let arrayNumbers: Number[] = []
let evenNumbers: Number[] = []

for (let i = 0; i < Math.floor(Math.random() * (max - min + 1)) + min; i++) {
  arrayNumbers.push(Math.floor(Math.random() * (max - min + 1)) + min)
}

function isEven(inputNumber: number, index: number, inputArray: number[]) {
  if (inputNumber % 2 == 0) {
    evenNumbers.push(inputNumber)
  }
}
console.log(arrayNumbers)
arrayNumbers.forEach(isEven)
console.log(evenNumbers)
