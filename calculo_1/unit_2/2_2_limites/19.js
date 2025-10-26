function limite(x) {
  const num = x ** 2 - 2 * x
  const div = x ** 2 - x - 2
  console.log(num, div, x, num / div)
  return num / div
}

const xss = [2.5, 2.1, 2.05, 2.01, 2.005, 2.001, 1.9, 1.95, 1.99, 1.995, 1.999];

for (let i = 0; i < xss.length; i++) {
  limite(xss[i])
}

// limite de f = 0.6 = 2/3