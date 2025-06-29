// -- For Loop --

//  Fiecare for loop are 3 zone:
//  1. Initializare: este executata o singura data
// inainte de inceperea for-ului
// 2. Conditie: este executata incainte de fiecare
//  repetitie / iteratie . Daca conditia este adevarata
//  atunci se va executa codul din acoladele for-ului
// Daca este falsa atunci se incheie executia intregului for
// 3. Increment / decrement : este executata dupa fiecare repetitie / iteratie.

console.log("start...");

// repetitia 1: i = 0 -> 0 < 4 (true) -> clg -> i++
// repetitia 2: i = 1 -> 1 < 4 (true) -> clg -> i++
// repetitia 3: i = 2 -> 2 < 4 (true) -> clg -> i++
// repetitia 4: i = 3 -> 3 < 4 (true) -> clg -> i++
// repetitia 5: i = 4 -> 4 < 4 (false)
for (let i = 0; i < 4; i++) {
  console.log(`loop ${i}`);
}

console.log("finish...");

// shortcuts pt calcule
let x = 5;
x = x + 1;
x += 1;
x++;

x *= 3;

// console.log(x);

// 7 : 3 = 2 rest 1
// 14 : 5 = 2 rest 4
// 10 : 5 = 2 rest 0

//  Exercitiul 1) Sa se creeze o variabila y care contine un nr.
//  Sa se afiseze in consola "y zivizibul cu 2 " daca y este zivizibil cu 2
// let y = 11;

// // mod
// if (y % 2 === 0) {
//   console.log("y este divizibil cu 2");
// }

// Execrcitiul 2: folosind un for sa se afiseze in consola  toate numerele de la
// 0 la 10

for (let i = 0; i <= 10; i++) {
  console.log(i);
}

//  Exercitiul 3: sa se afiseze toate numerele pare de la 10 la 10

for (let i = 0; i <= 10; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

// Exercitiul 4: impare

for (let i = 0; i <= 10; i++) {
  if (i % 2 === 1) {
    console.log(i);
  }
}

//  exercitiul 4: multiplii de 2 si de 3 de la 0 la 20

for (let i = 0; i <= 20; i++) {
  if (i % 2 === 0 && i % 3 === 0) {
    console.log(i);
  }
}

// 0
// 3
// 6
// 9
// 12
// 15
for (let i = 0; i < 16; i++) {
  if (i % 3 === 0) {
    console.log(i);
  }
}

// -- Algoritm pentru calcularea sumei unui sir de numere
//  1 2 ... 10

// let sum = 0;

for (let i = 1; i <= 10; i++) {
  sum += i;
}

console.log(sum);

// -- Array --

// ex
let number = [5, 3, 32, -2, 187];
//            0  1   2   3   4
// // Q: ce este un arrray
// A: este un tip de data din js

// Q: cum putem privi un array
// A: ca pe o lista de elemente

// Q: ce poate contine un array
// A: poate contine orice tip de data:(number, string, boolean,)
// poate contine 0 sau mai multe elemente iar fiecare elment reprezinta o valoare

// Q: cum poti aseza un element dintr-un array
// A: pe baza index-ului

console.log(number[1]);

// Q: cum poti adauga un element intr-un array
// A: folosind metoda push

number.push(20);

// Exercitiu: sa se creeze un array care contine o lista de cumparaturi

let basket = ["pui", "cereale", "peste"];

basket.push("vita", "cola");

//

let sum = 0;

// 1= 0, i < 5 true -> sum += numbers [0] =5
for (let i = 0; i < number.length; i++) {
  sum += number[i];
}

// exercitiu: suma numerelor pare dintr-un array
for (let i = 0; i < number.length; i++) {
  if (number[i] % 2 === 0) {
    sum += number[i];
  }
}

// suma numerelor pozitive

for (let i = 0; i < number.length; i++) {
  if (number[i] >= 0) {
    sum += number[i];
  }
}
