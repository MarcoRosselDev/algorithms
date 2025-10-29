/* 
(a) Estime el valor de limite de x cuando tiende a cero
de la funcion f con una presicion de cinco decimales.
(b) Ilustre el inciso (a) graficando f.
*/

function limite_41(x) {
  return (1 + x) ** (1 / x)
}

import { s_cero as v } from "./valores.js";

for (let i = 0; i < v.length; i++) {
  console.log(`${v[i]} :`, limite_41(v[i]));
}