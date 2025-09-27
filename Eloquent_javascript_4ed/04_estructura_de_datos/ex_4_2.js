/* Reversión de un array
Los arrays tienen un método reverse que cambia el array invirtiendo el orden en el que aparecen sus elementos. Para este ejercicio, escribe dos funciones, reverseArray y reverseArrayInPlace. La primera, reverseArray, debería tomar un array como argumento y producir un nuevo array que tenga los mismos elementos en orden inverso. La segunda, reverseArrayInPlace, debería hacer lo que hace el método reverse: modificar el array dado como argumento invirtiendo sus elementos. Ninguna de las funciones puede utilizar el método reverse estándar.

Recordando las notas sobre efectos secundarios y funciones puras en el capítulo anterior, ¿qué variante esperas que sea útil en más situaciones? ¿Cuál se ejecuta más rápido?

// Tu código aquí.

*/

function reverseArray(arr) {
  let tx = []
  for (const el of arr) {
    tx.unshift(el)
  }
  return tx
}

function reverseArrayInPlace(myArray) {
  const lt = myArray.length
  const a = [...myArray]
  for (let i = 0; i < lt; i++) {
    myArray[i] = a[lt - 1 - i]
  }
}

let myArray = ["A", "B", "C"];
console.log(reverseArray(myArray));
// → ["C", "B", "A"];
console.log(myArray);
// → ["A", "B", "C"];
let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]

