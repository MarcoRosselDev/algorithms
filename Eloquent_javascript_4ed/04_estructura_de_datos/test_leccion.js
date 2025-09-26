console.log([1, 2, 3].concat([6, 7]));

// eliminar un item x arbitrario de un array
function remove(array, index) {
  return array.slice(0, index).concat(array.slice(index + 1))
}

console.log(remove(["a", "b", "c", "d", "e"], 3));

function max(...numbers) { // ...n = n indeterminado de parametros
  let result = -Infinity;
  for (let number of numbers) {
    if (number > result) result = number;
  }
  return result;
}
console.log(max(4, 1, 9, -2));
// → 9
console.log(-Infinity, Infinity, typeof Infinity);

let a = [1, 2, 3]
console.log(0, ...a, 4); // el ...a expande los elementos del array
// → 0 1 2 3 4

// tambien funciona dentro de objectos,
// si un elemento exciste se conserva el ultimo editado

let coordenadas = { x: 10, y: 0 };
console.log({ ...coordenadas, y: 5, z: 1 });
// → {x: 10, y: 5, z: 1}
