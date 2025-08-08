/* encontrar el limite analizando una tabla
* 
* Encontra el limite de (Math.pow(t, 1 / 2) - 2)/ (t - 4)
* para eso nos apoyamos de los valores que arrojen las siguientes variables t
* 3.9
* 3.99
* 3.999
* 4.001
* 4.01
* 4.1
*/

function limite(x) {
  const exponente = 1 / 2
  // math.pow(base, esponente) solo que para una raiz cuadrada el exponente es
  // una faccion
  const numerador = Math.pow(x, exponente) - 2
  const denominador = x - 4
  return numerador / denominador
}

const values = [3.9, 3.99, 3.999, 4.001, 4.01, 4.1]

values.forEach(v => {
  console.log(limite(v), v)
})


/* result || value
0.25158234186850126 3.9
0.2501564456182157 3.99
0.25001562695339796 3.999
0.24998437695292175 4.001
0.24984394500787133 4.01
0.24845673131658508 4.1
*/

/* raiz enesima
Math.pow(base, exponente)
*/

//console.log(Math.pow(25, 1 / 2));

/* conclucion:
* el limite de la f(t) es 0.25
*/