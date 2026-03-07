function destroyer(arr, ...valores){
  //console.log(valores)
  return arr.filter(val => !valores.some(item => item === val) )
}

/* 
Passed:1. You should have a destroyer function.
Passed:2. destroyer([1, 2, 3, 1, 2, 3], 2, 3) should return [1, 1].
Passed:3. destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3) should return [1, 5, 1].
Passed:4. destroyer([3, 5, 1, 2, 2], 2, 3, 5) should return [1].
Passed:5. destroyer([2, 3, 2, 3], 2, 3) should return [].
Passed:6. destroyer(["tree", "hamburger", 53], "tree", 53) should return ["hamburger"].
Passed:7. destroyer( ["possum", "trollo", 12, "safari", "hotdog", 92, 65, "grandma", "bugati", "trojan", "yacht"], "yacht", "possum", "trollo", "safari", "hotdog", "grandma", "bugati", "trojan" ) should return [12, 92, 65].
*/

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));
console.log(destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3));
console.log(destroyer([3, 5, 1, 2, 2], 2, 3, 5));
console.log(destroyer([2, 3, 2, 3], 2, 3));
console.log(destroyer(["tree", "hamburger", 53], "tree", 53));
console.log(destroyer( ["possum", "trollo", 12, "safari", "hotdog", 92, 65, "grandma", "bugati", "trojan", "yacht"], "yacht", "possum", "trollo", "safari", "hotdog", "grandma", "bugati", "trojan" ));
/* 
[ 1, 1 ]
[ 1, 5, 1 ]
[ 1 ]
[]
[ 'hamburger' ]
[ 12, 92, 65 ]

broo, a la primera, that was awesome.
*/

