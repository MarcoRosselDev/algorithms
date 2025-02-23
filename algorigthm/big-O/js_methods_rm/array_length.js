/* const max_length = Array(4294967296) // 2^32 --- "array.length return a number of 32 bts"
console.log(max_length.length); //Invalid array length */


/* // este es justo el limite, si nos pasamos retorna error ------------------------------------------
const max_length = Array(4294967295) 
console.log(max_length.length); // 4294967295

// no puede ser negativo---------------------------------------------------------------------------
const negative_length = Array(-12)
console.log(negative_length.length);// Invalid array length */



// interesante como la funcion declarada al final se puede llamar al principio del archivo
// ejemplo de la clasificacion de las funciones como elementos de primera clase
// por lo que el compilador las prosesa primero
var arr = [1, 2, 3];
printEntries(arr);

arr.length = 5; // establecer la longitud de la matriz en 5 mientras que actualmente es 3.
printEntries(arr);

function printEntries(arr) {
  var length = arr.length;
  for (var i = 0; i < length; i++) {
    console.log(arr[i]);
  }
  console.log("=== printed ===");
}