/* Aplanamiento
Utiliza el método reduce en combinación con el método concat para “aplanar” un 
array de arrays en un único array que contenga todos los elementos de los arrays
originales.
*/

let arrays = [[1, 2, 3], [4, 5], [6]];
// Tu código aquí.
arrays.reduce((accumulator, currentValue, index) => {
  //console.log(accumulator, currentValue, index);
  accumulator.concat(currentValue)
  console.log(accumulator);
  return accumulator
})
// → [1, 2, 3, 4, 5, 6]