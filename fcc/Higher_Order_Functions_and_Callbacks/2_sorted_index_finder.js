function getIndexToIns(array, number){
  let sorted = array.sort((a, b) => a - b)
  let index = sorted.findIndex(item => item >= number)
  return index >= 0 ? index: array.length
}

console.log(getIndexToIns([1, 2, 3, 4], 1.5)); // 1
console.log(getIndexToIns([20, 3, 5], 19)); // 2
console.log(getIndexToIns([3, 10, 5], 11)); // 3
