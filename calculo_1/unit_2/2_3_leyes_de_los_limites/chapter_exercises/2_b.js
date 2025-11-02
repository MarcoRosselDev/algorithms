/* Evalue cada limite justificando cada paso */

function limite_ex_2_b(x) {
  const num = x ** 3 + 2 * x ** 2 - 1;
  const den = 5 - 3 * x;
  return num / den;
}

// limites sercanos a -2
const values = [-2.01, -2.001, -2.0001, -1.99, -1.999, -1.9999]

for (let i = 0; i < values.length; i++) {
  console.log(`${values[i]} :`, limite_ex_2_b(values[i]));
}