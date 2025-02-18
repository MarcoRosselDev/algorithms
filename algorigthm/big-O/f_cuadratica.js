function discriminante(a, b, c) {
  const check = (b*b) - (4 * a * c);
  return check <= 0 ? false : check;
}

function f_cuadratica(a, b, c) {
  const disc = discriminante(a, b, c);
  const plus = ((b * -1) + Math.sqrt(disc)) / (2 * a);
  const less = ((b * -1) - Math.sqrt(disc)) / (2 * a);
  return disc === false
    ? "el discriminante vale callampa"
    : `[${plus}, ${less}]`;
}

console.log(f_cuadratica(1, -3, -18));

function desigualdad_signos(a, b, c, x) {
  return (a*x*x) + b*x + c;
}

console.log(desigualdad_signos(1, -3, -18, 2));
console.log(desigualdad_signos(1, -3, -18, 7));
console.log(desigualdad_signos(1, -3, -18, -4));
