/* Mínimo
El capítulo previo presentó la función estándar Math.min que devuelve su menor argumento. 
Ahora podemos escribir una función como esa nosotros mismos. 
Define la función min que toma dos argumentos y devuelve su mínimo.

console.log(min(0, 10));
// → 0
console.log(min(0, -10));
// → -10 */

function min(argumento_1, argumento_2) {
  // si argumento_1 es menor a argumento_2 ?
  // entonces retornar argumento_1 si no retornar argumento_2
  return argumento_1 < argumento_2 ? argumento_1 : argumento_2
}

console.log(min(0, 10));
// → 0
console.log(min(0, -10));
// → -10