// Manera normal
function sumarNormal(a, b) {
  return a + b;
}

// Con constructor Function
const sumarConstructor = new Function('a', 'b', 'return a + b');

console.log(sumarNormal(5, 3));     // 8
console.log(sumarConstructor(5, 3)); // 8




// explicacion de el alcance global y local en este caso de uso:

let variableGlobal = "Soy global";

function funcionNormal() {
  let variableLocal = "Soy local";
  
  // Función normal - tiene acceso a variableLocal
  const interna = function() {
    console.log(variableLocal); // ✅ Funciona: "Soy local"
    console.log(variableGlobal); // ✅ Funciona: "Soy global"
  };
  
  // Función con constructor Function
  const dinamica = new Function('console.log(variableLocal); console.log(variableGlobal)');
  
  interna();   // Funciona completamente
  dinamica();  // ❌ Error: variableLocal is not defined
               // Solo ve variableGlobal
}