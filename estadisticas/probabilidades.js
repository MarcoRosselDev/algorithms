function probabilidades(array, n) {
  const lamda = array.length
  return n / lamda
}

function decimal_to_porcent(dec) {
  p = dec * 100
  return `${p} %`
}

console.log(decimal_to_porcent(probabilidades([1, 2, 3, 4, 5, 6], 3)));