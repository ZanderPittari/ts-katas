function returnHighestNumber(a: number, b: number) {
  if (a < b) {
    return 0 // returns 0 if b is larger than a
  } else {
    return 1 // returns 1 if a if larger than b
  }
}

let inputValues: number[] = []
let highestNumber: number = 0
let highestNumberOG: number = 0
export let max = 100
let min = 50
for (let i = 0; i <= Math.floor(Math.random() * (max - min + 1)) + min; i++) {
  inputValues.push(Math.floor(Math.random() * (max - min + 1)) + min)
}

for (let i = 0; i <= inputValues.length; i++) {
  let returnedValue: number = returnHighestNumber(highestNumber, inputValues[i])

  // If b is larger than a then make a the new highest number
  if (returnedValue == 0) {
    highestNumber = inputValues[i]
  }
  // If a is larger than b, check to see if b is larger than the old highestnumber
  else {
    highestNumber = highestNumber
  }
}
// Output the highestnumber to the console
console.log(highestNumber)
//console.log(inputValues)
