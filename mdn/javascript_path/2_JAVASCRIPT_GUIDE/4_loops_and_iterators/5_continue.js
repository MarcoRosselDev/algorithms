let k = 0;
let n = 0;
while (k < 5) {
  k++;
  if (k === 3) {
    continue;
  }
  n += k;
  console.log(n);
}
// Logs:
// 1 3 7 12

// example 2

let i = 0;
let j = 10;
checkIandJ: while (i < 4) {
  console.log(i);
  i += 1;
  checkJ: while (j > 4) {
    console.log(j);
    j -= 1;
    if (j % 2 === 0) {
      continue;
    }
    console.log(j, "is odd.");
  }
  console.log("i =", i);
  console.log("j =", j);
}