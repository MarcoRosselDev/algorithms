/* 
(a) Evalue h para x = 1, 0.5, 0.1, 0.05,
0.01 y 0.005.

(b) intuya el valor del limite de h cuando x tiende a 0

(c) Evalúe h(x) para sucesivos valores pequeños de x hasta que
finalmente alcance un valor de 0 para h(x). ¿Aún confía
usted en que su conjetura en el inciso b) es correcta?
Explique por qué finalmente obtuvo valores 0. (En la
sección 4.4 se explicará un método para evaluar el límite.)

(d) Grafique la función h en un rectángulo de vista F1, 1G por
F0, 1G. Después haga un acercamiento hacia el punto donde
la gráfica interseca el eje y, para estimar el límite de h(x)
cuando x tienda a 0. Continúe el acercamiento hasta que
observe distorsiones en la gráfica de h. Compare con los
resultados del inciso c).
*/

function limite_44(x) {
  return (Math.tan(x) - x) / x ** 3;
}


/* const values = [1, 0.5, 0.1, 0.05, 0.01, 0.005];

console.log("inciso a");


for (let i = 0; i < values.length; i++) {
  console.log(`${values[i]} :`, limite_44(values[i]));
} */
console.log("inciso b");

const inciso_b = [0.0001, 0.00001, 0.0000001, 0.000001, 0.00000001]

for (let i = 0; i < inciso_b.length; i++) {
  console.log(`${inciso_b[i]} :`, limite_44(inciso_b[i]));
}
