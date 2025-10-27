import { s_menos_tres_positivos as values } from "./valores.js";

function limite_27(x) {
  const num = x + 2;
  const div = x + 3;
  return num / div;
}

for (let i = 0; i < values.length; i++) {
  console.log(`${values[i]} :`, limite_27(values[i]));
}