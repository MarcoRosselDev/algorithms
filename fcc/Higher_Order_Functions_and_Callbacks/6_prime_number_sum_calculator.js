function sumPrimes(num) {
  let result = 0
  // necesitamos verificar si el numero es divisible solo por 1 y por si mismo

  if (num <= 2) {
    return 0
  } else {

  
    for (let i = 2; i <= num; i++) {
      // aplicar la verificacion desde el numero hacia atras , asta el 1
        let int = i
        let sub = true
        console.log("into bucle 1 :", i);
        
        for (let j = i; j > 1; j--) {
          let check = int % j
          console.log("ito bucle 2: ", j, check);
          
          if (check === 0) {
            sub = false
            break
          }         
        }
        if (sub) {
          result += int
        }
    }
  }
  return result
}

console.log(sumPrimes(10)); // 17 sh
