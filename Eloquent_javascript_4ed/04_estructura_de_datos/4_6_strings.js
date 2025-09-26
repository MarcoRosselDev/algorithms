console.log("coconuts".slice(4, 7));
// → nut
console.log("coconut".indexOf("u"));
// → 5
console.log("one two three".indexOf("ee"));
// → 11

//.trim elimina los espacios y saltos de linea del principio y final
console.log("  okay \n ".trim());
// → okay

console.log("marco".toUpperCase());
console.log("Marco".toLocaleLowerCase());

// .split() separa un string segun la concurrencia de otro string
// se pueden unir con .join()
let sentence = "Secretarybirds specialize in stomping";
let words = sentence.split(" ");
console.log(words);
// → ["Secretarybirds", "specialize", "in", "stomping"]
console.log(words.join(". "));
// → Secretarybirds. specialize. in. stomping

console.log("La".repeat(5)); // LaLaLaLaLa
