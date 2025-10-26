// limite de f cuando x tiende a 1

function limite_25(x) {
  const num = (x ** 6) - 1;
  const div = (x ** 10) - 1
  return num / div
}

const values = [1.01, 1.001, 1.0001, 0.99, 0.999, 0.9999]

for (let i = 0; i < values.length; i++) {
  console.log(`${values[i]} :`, limite_25(values[i]));
}