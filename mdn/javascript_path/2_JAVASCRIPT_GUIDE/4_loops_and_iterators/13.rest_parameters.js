function mult (mt, ...rest) {
  return rest.map(n => n * mt)
}

console.log(mult(2, 1, 2, 3));
