//fibonacci impar
// suma

function sumFibs(num) {
  let a = 1
  let b = 0
  let sum = 0

  while (b <= num) {
    let m = a
    let m2 = b
    a = b
    b = m + m2

    if (b%2 !== 0 && b <= num) {
      sum += b
    }
    console.log(b, sum);
  }

  return sum
}

//sumFibs(75024)
console.log(
  sumFibs(1000),
  sumFibs(75024)
);


// if 1_000 then 1_785
// if 4_000_000 then 4_613_732
// if 4 then 5
// if 75_024 then 60_696
// if 75_025 then 135_721
