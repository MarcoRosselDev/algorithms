function limite_48(x) {
  const num = x ** 3 - 1;
  const div = x ** (1 / 2) - 1;
  return num / div;
}

// limite cuando tiende a 1
const values = [0.99, 0.999, 0.9999, 1.01, 1.001, 1.0001, 1.0649];

for (let i = 0; i < values.length; i++) {
  console.log(`${values[i]} :`, limite_48(values[i]));
}