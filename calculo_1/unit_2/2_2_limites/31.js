import { s_uno as values } from "./valores.js"

function limite_31(x) {
  const num = 2 - x;
  const div = (x - 1) ** 2
  return num / div;
}

for (let i = 0; i < values.length; i++) {
  console.log(`${values[i]} :`, limite_31(values[i]));
}