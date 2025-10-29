import cosecante from "./cosecante.js";

function limite_35(x) {
  return x * cosecante(x)
}



const dos_pi = 2 * Math.PI;

const values = [dos_pi - 0.01, dos_pi - 0.001, dos_pi - 0.0001, dos_pi - 0.00001]
//console.log(limite_35(values[0]));


for (let i = 0; i < values.length; i++) {
  console.log(`${values[i]} :`, limite_35(values[i]));
}