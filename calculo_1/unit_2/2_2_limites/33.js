import ln from "./ln.js"
import { s_tres_positivos as values } from "./valores.js"

function limite_33(x) {
  return ln(x ** 2 - 9)
}

for (let i = 0; i < values.length; i++) {
  console.log(`${values[i]} :`, limite_33(values[i]));
}