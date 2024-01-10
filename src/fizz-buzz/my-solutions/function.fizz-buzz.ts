export function alterNumbers(inputNumber: any) {
  if (inputNumber % 3 == 0 && inputNumber % 5 == 0) {
    inputNumber = 'fizzbuzz'
  } else if (inputNumber % 5 == 0) {
    inputNumber = 'buzz'
  } else if (inputNumber % 3 == 0) {
    inputNumber = 'fizz'
  } else {
    inputNumber = inputNumber
  }

  return inputNumber
}
