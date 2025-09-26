/*  */

let unObjeto = { izquierda: 1, derecha: 2 };
console.log(unObjeto.izquierda);
// → 1
// delete xobj.y => elimina el tentaculo por completo haciendolo inaccesible = undefined
delete unObjeto.izquierda;
console.log(unObjeto.izquierda);
// → undefined
console.log("izquierda" in unObjeto);
// → false
console.log("derecha" in unObjeto);
// → true

// Object.keys(obj) => return un array con los nombres de las propiedades del objeto
console.log(Object.keys({ x: 0, y: 0, z: 2 }));
// → ["x", "y", "z"]

// Object.assign(objA, objB) => le asigna los elementos del objA al objB en caso de contener un elemento con un mismo nombre se reescribira el del objB
let objetoA = { a: 1, b: 2 };
Object.assign(objetoA, { b: 3, c: 4 });
console.log(objetoA);
// → {a: 1, b: 3, c: 4}