// limite cuando x tiende a 1 de fx

function limite_preciso(x) {
  return x ** 3 - 5 * x + 6
}

const values = [1.1, 1.01, 1.001, 1.0001, 0.9, 0.99, 0.999, 0.999]

for (let i = 0; i < values.length; i++) {
  console.log(limite_preciso(values[i]));
}