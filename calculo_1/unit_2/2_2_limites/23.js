/* 23-26
Utilice una tabla de valores para estimar el valor de cada uno
de los siguiente  limites.
Si dispone usted de una calculadora o computadora, utilicela 
para confirmar graficamente su resultado
*/

function limite_23(x) {
  const num = Math.sqrt(x + 4) - 2
  const div = x
  return num / div
}

// limite de x cuanto tiende a 0 por lo que
// los valores deven ser sercanos a 0
const valores = [0.01, 0.001, 0.0001, -0.0001, -0.001, -0.01]

for (let i = 0; i < valores.length; i++) {
  console.log(`${valores[i]} : `, limite_23(valores[i]));
}