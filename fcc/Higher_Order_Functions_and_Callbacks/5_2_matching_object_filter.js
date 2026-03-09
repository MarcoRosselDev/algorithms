function whatIsInAName(arr, sourceObj) {

  const claves_source = Object.keys(sourceObj) // this are strings too.
  const valores_source = Object.values(sourceObj) // los valores tienen que ser mayores o iguales, no solo uno y ya

  let result = []

  arr.forEach((obj) => {
    const claves = Object.keys(obj) // [a, b, c]
    const valores = Object.values(obj) // [x, y , z]

    const check_clave = claves.some(str => claves_source.some(item => item === str))
    const check_valor = valores.some(item => valores_source.some(v => v === item))
    // ahora que estamos seguros de que almenos uno o mas claves valor estan en el obj
    // necesitamos verificar si el obj es === al sourceObj o con mas elementos

    
    if (check_clave && check_valor) {
      
      const claves_source_check = claves_source.every(item => claves.some(str => str === item))
      const valores_source_check = valores_source.every(item => valores.some(str => str === item))
      if (claves_source_check && valores_source_check) {

        // sea {"a": 1, "b": 9999, "c": 3} === sourceObj
        // y sea {"a": 1, "b": 2, "c": 3, "d": 9999} === arr de objetos con solo 1 objeto

        let x = claves_source.every(string => sourceObj[string] === obj[string])
        //console.log(x);
        if (x) {
          result.push(obj)
        }
      }
    }

  });

  return result
}

console.log(whatIsInAName([{"a": 1, "b": 2, "c": 3, "d": 9999}], {"a": 1, "b": 9999, "c": 3}));


console.log(whatIsInAName(
  [
    { first: "Romeo", last: "Montague" },
    { first: "Mercutio", last: null },
    { first: "Tybalt", last: "Capulet" }
  ],
  { last: "Capulet" }
));
console.log(whatIsInAName([
    { "apple": 1, "bat": 2 }, 
    { "bat": 2 }, 
    { "apple": 1, "bat": 2, "cookie": 2 }
  ], 
  { "apple": 1, "bat": 2 }));
// [{"apple": 1, "bat": 2}, {"apple": 1, "bat": 2, "cookie": 2}]

console.log(
  whatIsInAName([
    { "apple": 1, "bat": 2 }, 
    { "apple": 1 }, 
    { "apple": 1, "bat": 2, "cookie": 2 }
  ], 
  
  { "apple": 1, "cookie": 2 })
);
// [{"apple": 1, "bat": 2, "cookie": 2}]
// [ { apple: 1, bat: 2 }, { apple: 1, bat: 2, cookie: 2 } ]

/* let arr = [
  { first: "Romeo", last: "Montague" },
  { first: "Mercutio", last: null },
  { first: "Tybalt", last: "Capulet" }
]

let entries = Object.keys(arr[0])
let values = Object.values(arr[0])

entries.forEach(i => {

  console.log(
    i
  );
})

values.forEach(v => {
  console.log(v)
})

 */