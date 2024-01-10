export function addTogether(numberArray: number[]) {
  let finalNumber: number = 0

  for (let i = 0; i < numberArray.length; i++) {
    const element = numberArray[i]
    finalNumber += numberArray[i]
  }

  return finalNumber
}
