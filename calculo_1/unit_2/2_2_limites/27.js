/* 
(a) Por medio de la grafica de f y u acercamiento al punto donde la
grafica interseca el eje y, estime el valor de 
Lim f  x-->0

(b) Verifique su respuesta del inciso (a) mediante la evaluacion
de f para valores de x que tiendan a 0

f(x) = ( cos2x - cosx ) / x^2
*/

import { s_cero as values } from "./valores.js"

function limite_27(x) {
  const num = Math.cos(2 * x) - Math.cos(x);
  const div = x ** 2
  return num / div;
}

for (let i = 0; i < values.length; i++) {
  console.log(`${values[i]} :`, limite_27(values[i]));
}


/* 
// Funciones básicas - trabajan en RADIANES
Math.sin(x)   // Seno
Math.cos(x)   // Coseno
Math.tan(x)   // Tangente

// Funciones inversas
Math.asin(x)  // Arcoseno
Math.acos(x)  // Arcocoseno  
Math.atan(x)  // Arcotangente
*/