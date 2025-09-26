const str = "Hola, buenos días!"

str[str.length - 1] = "¡¡"
str[0] = "1"

// esto demuestra que los string son inmutables
console.log(str);

// los numeros, booleanos y string son inmutables
// se puede guardar en un let o const pero esto es un segimiento del valor
// no se muta si no que se cambia por uno diferente

let obj_1 = { a: 1 }
let obj_2 = obj_1
let obj_3 = { a: 1 }
console.log(obj_1 == obj_2); // true
console.log(obj_1 == obj_3); // false

obj_2.a = 2
console.log(obj_1); // { a: 2 }
// los objetos son mutables y conservan su direccion de valores
// por lo que si igualas una variable y alteras cualquiera se mutaran ambas
