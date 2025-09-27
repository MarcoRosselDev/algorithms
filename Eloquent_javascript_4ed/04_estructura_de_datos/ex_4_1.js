/* La suma de un rango
La introducción de este libro insinuó lo siguiente como una forma 
agradable de calcular la suma de un rango de números:

console.log(sum(range(1, 10)));
Escribe una función range que tome dos argumentos, inicio y fin, 
y devuelva un array que contenga todos los números desde inicio hasta fin, 
incluyendo fin.

Luego, escribe una función sum que tome un array de números y devuelva la suma de estos números.
 Ejecuta el programa de ejemplo y verifica si realmente devuelve 55.

Como asignación adicional, modifica tu función range para que tome un tercer argumento 
opcional que indique el valor de “paso” utilizado al construir el array. 
Si no se proporciona un paso, los elementos deberían aumentar en incrementos de uno, 
correspondiendo al comportamiento anterior. La llamada a la función range(1, 10, 2) debería devolver [1, 3, 5, 7, 9]. 
Asegúrate de que esto también funcione con valores de paso negativos, 
de modo que range(5, 2, -1) produzca [5, 4, 3, 2].
*/

function range(inicio, fin, opcional) {
  let arr = []
  // si no se incluye opcional
  if (!opcional) {
    // si es de menor a mayor
    if (inicio < fin) {
      for (let i = inicio; i < fin + 1; i++) {
        arr.push(i)
      }
      return arr
    }
    // si es de mayor a menor
    else if (inicio > fin) {
      for (let i = inicio; i > fin - 1; i--) {
        arr.push(i)
      }
      return arr
    }
  }
  // si se incluye opcioal
  else if (opcional) {
    console.log(opcional, arr, inicio, fin);
    // si es de menor a mayor
    if (inicio < fin && opcional >= 1) {
      for (let i = inicio; i < fin + 1; i += opcional) {
        arr.push(i)
      }
      return arr
    }
    // si es de mayor a menor
    else if (inicio > fin && opcional <= -1) {
      for (let i = inicio; i > fin - 1; i += opcional) {
        arr.push(i)
      }
      return arr
    }
  }
}

function sum(arr) {
  let suma = 0
  for (const element of arr) {
    suma += element
  }
  return suma
}

console.log(range(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
console.log(sum(range(1, 10)));
// → 55
console.log(sum(range(10, 1)));
// → 55