/* Haciendo un triángulo con bucles
Escribe un bucle que realice siete llamadas a console.log para
 mostrar el siguiente triángulo:

#
##
###
####
#####
######
####### */
let out = ""
for (let index = 0; index < 7; index++) {
  out += "#"
  console.log(out);
}