const arr = new Array(5);
console.log(arr); // [ <5 empty items> ]

const arr_2 = Array.from({ length: 5 });
console.log(arr_2); // [ undefined, undefined, undefined, undefined, undefined ]

const arr_3 = [1, 2, 3, , 5];
console.log(arr_3); // [ 1, 2, 3, <1 empty item>, 5 ]

const arr_4 = [1, 2, 3];
arr_4[4] = 4;
console.log(arr_4); // [ 1, 2, 3, <1 empty item>, 4 ]
