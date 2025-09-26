let listaDeTareas = [];
function recordar(tarea) {
  // .push agrega al final de un array
  listaDeTareas.push(tarea);
}
function obtenerTarea() {
  // .shift elimina el primer el del array y lo devuelve
  return listaDeTareas.shift();
}
function recordarUrgente(tarea) {
  // .unshift agrega un el al principio del array
  listaDeTareas.unshift(tarea);
}

// .indexOf buscar el indice de un el en un array, retorna el indice del primer el matcheado
console.log([1, 2, 3, 2, 1].indexOf(2));
// → 1

// .lastIndexOf lo mismo pero retorna el indice del primer el matcheado buscando desde el final,
// ambos methodos aseptan un segundo parametro number, que indica desde donde se quiere comenzar a buscar
console.log([1, 2, 3, 2, 1].lastIndexOf(2));
// → 3

// .slice(a , b: opcional)
// a= desde donde se quiere comenzar a cortar incluyendo el i
// b= opciona, asta donde sin incluir el i, si no lo agregas se cortara asta el final del array
// tambien puedes omitir a y se copiara todo el array
console.log([0, 1, 2, 3, 4].slice(2, 4));
// → [2, 3]
console.log([0, 1, 2, 3, 4].slice(2));
// → [2, 3, 4]

// arr_1.concat(arr_2)
// concatena o une dos arrays