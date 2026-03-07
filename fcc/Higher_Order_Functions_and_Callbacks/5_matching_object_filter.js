// arr === array de objetos, this object === source
function whatIsInAName(arr, source) {
//  return arr.filter(obj => obj.some(clave => clave=== source[clave]))
  let result = arr.map(obj =>{
    console.log(obj);
    
  })

/* let {c,v} = source
  let f = arr.filter(obj => {
    const {clave, valor} = obj
    console.log(clave, valor, c,v);
    return clave === c && valor === v? {clave, valor}: null
  })
  return f
 */
}

/* ejemplo: */

console.log(
  whatIsInAName(
    [
      { first: "Romeo", last: "Montague" },
      { first: "Mercutio", last: null },
      { first: "Tybalt", last: "Capulet" }
    ],
    { last: "Capulet" }
  )
);

// should return [{ first: "Tybalt", last: "Capulet" }]

//Z%utkr5ZCMGhv7:k