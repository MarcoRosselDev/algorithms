function test(int) {
  const numerador = int ** 2;
  const denominador = 2 ** int;
  return numerador / denominador;
}

const evaluar = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 20, 50, 100];

for (let i = 0; i < evaluar.length; i++) {
  console.log(evaluar[i], " : ", test(evaluar[i]));
}
