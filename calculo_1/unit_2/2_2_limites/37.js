function limite_37(x) {
  const num = x ** 2 - 2 * x - 8;
  const div = x ** 2 - 5 * x + 6;
  return num / div;
}

// cuando x tiende a 2 positivo
const values = [2.01, 2.001, 2.0001, 2.00001]

for (let i = 0; i < values.length; i++) {
  console.log(`${values[i]} :`, limite_37(values[i]));
}

/* 
2.01 : 806.0505050505035
2.001 : 8006.0050050105665
2.0001 : 80006.00050018785
2.00001 : 800006.0000809492
*/