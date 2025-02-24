const myArray = [1,3,9,5,3,2];

const newOne = myArray.map(function (value, index) {
  return value * 2;
})

// map retorna un array nuevo
// forEach solo itera y ejecuta un bloque de codigo por cada elemento del array
console.log(newOne);