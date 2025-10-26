function limite_21(t) {
  const numerador = Math.pow(Math.E, 5 * t) - 1;
  const divisor = t;
  console.log(numerador, t, numerador / divisor);

  return numerador / divisor;
}

const tss = [
  0.5,
  -0.5,
  0.1,
  -0.1,
  0.01,
  -0.01,
  0.001,
  -0.001,
  0.0001,
  -0.0001,
]

for (let i = 0; i < tss.length; i++) {
  limite_21(tss[i])
}