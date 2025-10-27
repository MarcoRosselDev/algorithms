// limite de f cuando x tiende a 1
import { s_uno as values } from "./valores.js"

function limite_25(x) {
  const num = (x ** 6) - 1;
  const div = (x ** 10) - 1
  return num / div
}

//const values = [1.01, 1.001, 1.0001, 0.99, 0.999, 0.9999]

for (let i = 0; i < values.length; i++) {
  console.log(`${values[i]} :`, limite_25(values[i]));
}

/* correcto
1.01 : 0.5880223744184385
1.001 : 0.5988002023974697
1.0001 : 0.5998800020024134
0.99 : 0.6120175752024378
0.999 : 0.6012001975974857
0.9999 : 0.6001200019975804
*/