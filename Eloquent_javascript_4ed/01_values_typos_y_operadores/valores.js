/* numero 13 en bytes 
  0   0   0   0   1   1   0   1
128  64  32  16   8   4   2   1

1 significa encendido --> por lo que se suman todos los bytes encendidos

1 + 4 + 8 = 13

ejercicio:
  Escribe el numero 20 en sistema de bytes
  0   0   0   1   0   1   0   0
128  64  32  16   8   4   2   1

16 + 4  = 20
*/

//const b = 00010100

const trece = 13
console.log(trece.toString(2)); // -> 1101


//console.log(00010100);
