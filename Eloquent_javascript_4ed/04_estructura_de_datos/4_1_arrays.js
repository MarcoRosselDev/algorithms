/* acceder a propiedades de un array
1. con punto
  valor.x
2. con corchete
  valor[x]
  esta se utiliza cuando el nombre de la propiedad no respeta las convenciones usuales, como

  valor.paquita cabeza

  en este caso se utiliza la notacion de corchete:

  valor["paquita cabeza"]

  los requerimientos para un nombre valido es que no tenga espacios en blanco, que no comienzen con numero ni caracteres especiales.
  como los array tienen como nombre de sus elementos un numero que representa su indice, estos por lo tanto no son nombres validos para acceder con notacion de punto.
  Por lo que se accede con notacion de corchete arr[2]
  */
let arr0 = [1, 2, 3]
// arr.length es una propiedad que tienen casi todos los tipos de datos y en este caso "arrays" nos dice la cantidad de elementos que contiene el array
console.log(arr0.length); // → 3

let secuencia = [1, 2, 3];
secuencia.push(4);
secuencia.push(5);
console.log(secuencia);
// → [1, 2, 3, 4, 5]
console.log(secuencia.pop());
// → 5
console.log(secuencia);
// → [1, 2, 3, 4]