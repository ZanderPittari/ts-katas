let arrayNumber: number[] = []
let max = 100
let min = 50

function elementCallback(value: number, element: number) {
  console.log(element)
}

for (let i = 0; i < Math.floor(Math.random() + (max - min + 1)) + min; i++) {
  arrayNumber.push(Math.floor(Math.random() * (max - min + 1)) + min)
}

arrayNumber.forEach(elementCallback)
