/* limite cuando x tiende a 0.5'- por la izquierda' */

function limite_43_2_3(x) {
  const num = 2 * x - 1;
  const den = Math.abs(2 * (x ** 3) - x ** 2);
  return num / den;
}

const values = [-0.49, -0.499, -0.4999, -0.49999];

for (let i = 0; i < values.length; i++) {
  console.log(`${values[i]} :`, limite_43_2_3(values[i]));
}

// output
/*
-0.49 : -4.164931278633903
-0.499 : -4.01604812832077
-0.4999 : -4.001600480128031
-0.49999 : -4.000160004800128
*/

// conclucion:
// cuando x tiende a 0.5 por la izquierda el limite de la funcion
// f tiende a ser -4