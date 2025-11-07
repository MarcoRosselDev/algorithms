/* lo mismo que el ejercicio 33 pero con otra funcion */

import { s_cero as values } from "../../2_2_limites/valores.js";

function limite_34_2_3(x) {
  const num = (3 + x) ** (1 / 2) - 3 ** (1 / 2);
  const den = x
  return num / den;
}

for (let i = 0; i < values.length; i++) {
  console.log(`${values[i]} :`, limite_34_2_3(values[i]));
}