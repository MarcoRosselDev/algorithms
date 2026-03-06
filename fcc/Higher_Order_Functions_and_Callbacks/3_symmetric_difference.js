function diffArray(arr1, arr2) {

  let is = arr1.filter(str => !arr2.some(item => item === str))
  let or_not = arr2.filter(str => !arr1.some(item => item === str))
  return is.concat(or_not)
  /* if (arr1.length >= arr2.length) {
    return arr2.filter(str => !arr1.some(item => item === str))
  } else {
    return arr1.filter(str => !arr2.some(item => item === str))
  } */
}

console.log(diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"])); //["pink wool"]

console.log(diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["andesite", "grass", "dirt", "dead shrub"])); // ["diorite", "pink wool"]

console.log(diffArray(["pen", "book"], ["book", "pencil", "notebook"]));


// arr1.filter((num) => num % 2 === 0)  // [2, 4, 6, 8, 10]
// arr1.filter((str) => str )