/* Evalue cada limite justificando cada paso */

function limite_ex_2(x) {
  return 2 * (x ** 2) - 3 * x + 4;
}

// limites sercanos a 5
const values = [4.99, 4.999, 4.9999, 5.01, 5.001, 5.0001]

for (let i = 0; i < values.length; i++) {
  console.log(`${values[i]} :`, limite_ex_2(values[i]));
}

/* 
4.99 : 38.830200000000005
4.999 : 38.98300199999999
4.9999 : 38.99830002
5.01 : 39.170199999999994
5.001 : 39.017002000000005
5.0001 : 39.00170002

conclucion:
cuando la x tiende a 5 la funcion f tiende a ser 39
*/