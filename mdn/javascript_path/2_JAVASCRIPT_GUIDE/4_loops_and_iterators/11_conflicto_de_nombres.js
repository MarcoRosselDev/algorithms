function fuera() {
  const x = 10
  function dentro (x) {
    return x * 2
  }
  return dentro
}

console.log(fuera()(10));
