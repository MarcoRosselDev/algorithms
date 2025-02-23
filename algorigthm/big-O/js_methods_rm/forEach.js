const frutas = ['manzanas', 'peras', 'uvas', 'melones'];

/* frutas.forEach(function (value, index, arrayOfStrings) {
  console.log(value, index, arrayOfStrings);  
}) */

/* 
array.push() agrega al ultimo
array.unshift() agrega al inicio

array.pop() elimina el ultimo
array.shift() elimina al inicio

array.indexOf(<item name>) encontrar el indice de un elemento

array.slice(<index>, <cantidad>) se puede usar para copiar un array tmbn
*/

let naranjas = frutas.push('naranjas'); // retorna el index + 1, al final
console.log(naranjas);
