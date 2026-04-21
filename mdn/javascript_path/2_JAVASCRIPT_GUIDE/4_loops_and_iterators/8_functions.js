function new_array(f, arr) {
  const new_a = new Array(arr.length)

  for (let i = 0; i < new_a.length; i++) {
    new_a[i] = f(arr[i])
  }

  return new_a
}


const my_arr = [0, 1, 2, 5, 10]
const square = new_array(function (x) {
  return x*x*x
}, my_arr)


console.log(square);

// a function can be declared only if a condition is true:
let myFunc;
if (num === 0) {
  myFunc = function (theObject) {
    theObject.make = "Toyota";
  };
}