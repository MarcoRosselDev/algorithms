/* 33.
a) Estime el valor de el limite de x cuando tiende a 0 de f(x)
 graficando la función f x x (s1 3x 1).

b) Haga una tabla de valores de f (x) para x cercana a 0 e intuya
el valor del límite.

c) Utilice las leyes de los límites para probar que su conjetura
es correcta. */

import { s_cero as values } from "../../2_2_limites/valores.js";

function limite_33_2_3(x) {
  const num = x;
  const den = (((1 + 3 * x) ** 0.5) - 1)
  return num / den;
}

for (let i = 0; i < values.length; i++) {
  console.log(`${values[i]} :`, limite_33_2_3(values[i]));
}