const a = isFinite(1 / 0); // false
const b = isFinite(-Infinity); // false
const c = isFinite(NaN); // false
const d = isFinite(Infinity); // false
const e = isFinite(10); // true

console.log(a,b,c,d, e);

// conclucion
// isFinite es una funcion global que evalua si un numero es representable por numeros finitos
// no si es o no infinito, ¿ exsistira la funcion global isInfinite ?
//
// no exsiste la funcion isInfinite pero puedes usar !isFinite() en su lugar

/* ************************************************************************ */
/* Nota: 
Las funciones parseInt() y parseFloat() analizan una cadena hasta que alcancen un caracter 
que no es válido para el formato de número especificado, luego devuelve el número analizado hasta ese punto. 
Sin embargo, el operador "+" simplemente convierte la cadena a NaN si contiene un caracter no válido. 
Intenta analizar la cadena "10.2abc" con cada método tú mismo en la consola y 
comprenderás mejor las diferencias. */

console.log("con operador + :: " ,+"10.2abc"); // NaN
console.log("con parsefloat :: " ,parseFloat("10.2abc")); // 10.2
console.log("con parseint :: " ,parseInt("10.2abc")); // 10
