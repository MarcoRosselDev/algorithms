/* let person = { name: "Alice", age: 30, city: "New York" };
let { name, age, country = "Unknown" } = person;

console.log(country); // Unknown */

const person_1 = { name: "Alice", age: 30, city: "New York" };
const person_2 = {age: 32, city: "New York" };
const { name: name_person_1 = "random user name", age: age_person_1 = 18, country:country_person_1 = "Unknown" } = person_1;
const { name: name_person_2 = "random user name", age: age_person_2 = 18, city:city_person_2 = "Unknown" } = person_2;

console.log("info person 1: ", {name_person_1, age_person_1, country_person_1});
console.log("info person 2: ", {name_person_2, age_person_2, city_person_2});