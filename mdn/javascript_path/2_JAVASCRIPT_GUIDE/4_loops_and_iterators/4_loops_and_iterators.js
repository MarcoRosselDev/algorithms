/* 
for (initialization; condition; afterthought)
statement
*/

function doSomething(a, b, c) {
  console.log(a, b, c, "We're inside the doSomething fn");
}

for (let i = 0, j = 0, k=1   ;   i<4||j>-4;    i++, j--, k++)
  doSomething(i, j, k)

// this means that we can omit the {} if it's only one line of logic.
// And we can do more than one declaration, condition, and afterthought

/* 
do
  statement
while (condition);
*/