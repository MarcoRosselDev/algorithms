/* label:
  statement
 */
loop1: for (let i = 0; i < 3; i++) {
  loop2: for (let j = 0; j < 3; j++) {    
    if (i >=2) {
      break loop1
    } else {
      console.log(`i = ${i} and j = ${j}`);
    }    
  }
}