/* Tablero de ajedrez
Escribe un programa que cree una cadena que represente un tablero de
 8x8, usando caracteres de salto de línea para separar las líneas. 
En cada posición del tablero hay un carácter de espacio o un carácter 
"#". Los caracteres deben formar un tablero de ajedrez.

Al pasar esta cadena a console.log debería mostrar algo como esto: 

 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # #

Cuando tengas un programa que genere este patrón, define una variable size = 8 y cambia el programa para que funcione para cualquier size, generando un tablero con el ancho y alto dados.
*/

let size = 8

for (let index = 1; index < size + 1; index++) {
  if (index % 2 === 0) {
    console.log(" # # # #");
    continue
  } else {
    console.log("# # # # ");
  }
}