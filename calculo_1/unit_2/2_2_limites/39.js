/* Determine limite de f cuando x tiende a ser 1 negativo y positivo
siendo f = 1/(x^3 - 1)

a) evaluando f para valores de x que
tiendan a 1, por el lado izquierdo y por el lado derecho.
b) razonando como en el ejemplo 9, y
c) a partir de la gráfica de f 
*/

import { s_uno as values } from "./valores.js"

function limite_39(x) {
  return 1 / (x ** 3 - 1);
}

for (let i = 0; i < values.length; i++) {
  console.log(`${values[i]} :`, limite_39(values[i]));
}