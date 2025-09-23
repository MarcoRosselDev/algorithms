/* FizzBuzz
Escribe un programa que use console.log para imprimir todos los números del 1 al 100, con dos
 excepciones. Para los números divisibles por 3, imprime "Fizz" en lugar del número, 
 y para los números divisibles por 5 (y no por 3), imprime "Buzz" en su lugar.

Cuando tengas eso funcionando, modifica tu programa para imprimir "FizzBuzz" 
para los números que son divisibles por 3 y 5 (y sigue imprimiendo "Fizz" o "Buzz" 
para los números que son divisibles solo por uno de esos).

(Esto es en realidad una pregunta de entrevista que se ha afirmado que elimina a un porcentaje 
significativo de candidatos a programadores. 
Entonces, si lo resolviste, tu valor en el mercado laboral acaba de aumentar.) */

for (let index = 1; index < 101; index++) {
  const divisible_3 = index % 3
  const divisible_5 = index % 5
  if (divisible_3 === 0 && divisible_5 === 0) {
    console.log("FizzBuzz", index);
    continue
  } else if (divisible_3 === 0) {
    console.log("Fizz");
    continue
  } else if (divisible_5 === 0) {
    console.log("Buzz");
    continue
  } else {
    console.log(index);
  }
}