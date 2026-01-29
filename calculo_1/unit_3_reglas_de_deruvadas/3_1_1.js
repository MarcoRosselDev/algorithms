/* calcular el limite cuando h tiende a 0 de estas dos funciones */

function ec_1(h) {
  let numerador = 2.7 ** h - 1;
  let denominator = h;
  return numerador / denominator;
}

function ec_2(h) {
  let numerador = 2.8 ** h - 1;
  let denominator = h;
  return numerador / denominator;
}

let arr = [0.01, -0.01, 0.001, -0.001, 0.0001, -0.0001];

for (let i = 0; i < arr.length; i++) {
  console.log(`ec_1 {x = ${arr[i]}} , f'(x) = `, ec_1(arr[i]));
}
for (let i = 0; i < arr.length; i++) {
  console.log(`ec_2 {x = ${arr[i]}} , f'(x) = `, ec_2(arr[i]));
}
