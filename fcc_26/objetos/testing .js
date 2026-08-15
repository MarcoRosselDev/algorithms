const org = [1,2,3,4];
const copy = org.slice();

copy[1] = copy.splice(3, 1, copy[1])[0] // [ 1, [ 4 ], 3, 2 ] <--- por eso el ultimo [0]
console.log(copy);
