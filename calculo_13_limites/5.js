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

function limite(t) {
  const num = Math.pow(t, 1 / 2) - 2
  const den = t - 4
  return num / den
}

const values = [3.9, 3.99, 3.999, 4.001, 4.01, 4.1]

values.forEach(v => {
  console.log(limite(v), v)
})


/*
0.25158234186850126
0.2501564456182157
0.25001562695339796
0.24998437695292175
0.24984394500787133
0.24845673131658508
*/

/* raiz enesima
Math.pow(base, exponente)
*/

//console.log(Math.pow(25, 1 / 2));

/* conclucion:
* el limite de la f(t) es 0.25
*/