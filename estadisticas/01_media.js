export function media(arr) {
  let sumatoria = 0
  for (const el of arr) {
    sumatoria += el
  }
  return sumatoria / arr.length
}

console.log(media([1, 2, 3, 4, 5, 6]));
console.log(media([7, 6, 5]));
