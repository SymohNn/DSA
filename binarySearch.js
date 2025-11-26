function binarySearch(numbers, target) {
  let l = 0
  let r = numbers.length - 1
  while (l <= r) {
    const m = l + Math.floor((r - l) / 2)
    if (numbers[m] === target) {
      return m
    } else if (numbers[m] < target) {
      l = m + 1
    } else {
      r = m - 1
    }
  }
  return -1
}
 const numbers =[1,2,3,4,5,6,7,8]
console.log(binarySearch(numbers,8))