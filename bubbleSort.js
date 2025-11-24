//bubble sort
// 1. Iterate n - 1 times:
// 2.   Iterate from the start of the array to the end of the unsorted numbers:
// 3.     If the current number is greater than the one after it:
// 4.       Swap the numbers. Bubble the greater number up.

function bubbleSort(numbers) {
  for (let i = 0; i < numbers.length - 1; i++) {
    for (let j = 0; j < numbers.length - i - 1; j++) {
      if (numbers[j] > numbers[j + 1]) {
        const temp = numbers[j]
        numbers[j] = numbers[j + 1]
        numbers[j + 1] = temp
      }
    }
  }
}

const numbers = [5,3, 2, 4, 1]
bubbleSort(numbers)
console.log(numbers)
