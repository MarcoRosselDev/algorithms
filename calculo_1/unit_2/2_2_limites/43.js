/*  
(a) Evalue la funcion f para x =  1, 0.8,
0.6, 0.4, 0.2, 0.1 y 0.05 e intuya el valor de 
el limite de x cuando tiende a 0 de f.
(b) b) Evalúe f (x) para x m 0.04, 0.02, 0.01, 0.005, 0.003 y 0.001.
Intuya otra vez
*/

const x_a = [1, 0.8, 0.6, 0.4, 0.2, 0.1, 0.05]
const x_b = [0.04, 0.02, 0.01, 0.005, 0.003, 0.001]

function limite_43(x) {
  return x ** 2 - (2 ** x / 1000);
}

for (let i = 0; i < x_a.length; i++) {
  console.log(`${x_a[i]} :`, limite_43(x_a[i]));
}

console.log("b");

for (let i = 0; i < x_b.length; i++) {
  console.log(`${x_b[i]} :`, limite_43(x_b[i]));
}