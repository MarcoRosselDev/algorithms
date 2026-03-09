function whatIsInAName(arr, sourceObj) {

  const claves_source = Object.keys(sourceObj)
  const valores_source = Object.values(sourceObj)

  let result = []

  arr.forEach(obj => {

    let claves = Object.keys(obj) // [a, b, c]
    let valores = Object.values(obj) // [x, y , z]

    // usar every

    let check_clave = claves.some(item => claves_source.some(v => v === item))
    let check_valor = valores.some(item => valores_source.some(v => v === item))

    
    if (check_clave && check_valor && claves_source.length <= claves.length) {
      result.push(obj)
    }

  });
  return result
}

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