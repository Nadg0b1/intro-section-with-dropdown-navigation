// command + /

// -- variabile --
// scopul unei variabile - retinerea in memorie a unei valori
// pasi pt crearea unei variabile
// 1) scrie "let" pe o linie goala, iar la final pui un spatiu
// 2) scrii numele variabilei
// 3) pui "="
// 4) dai o valoare
// 5) pui ";"

let x = 5;

let y = 8;

let tempreture = -5;

let distance = 460;

// notatie camel case

let distanceBetweenBucharestAndConstanta = 300;

// Resctictii/reguli pe partea de nume de variabile
// - conventie: folosim CamelCase
// - nu poti folosii spatii in interiorul numelor sau alte caractere speciale
// - un nume nu poate incepe cu un nr.

// -- Tipuri de date --
// date = valoare

// 1) number
let curentWeek = 5;

// 2) string
let myName = "Bogdan";

// 3) boolean (true/false)
let isAdmin = true;

// ex: 2
// a) sa se creeze o variabila care contine numele userului curent
// b) sa se creeze o variabila care sa contina varsta
// c) sa se creeze o variabila care contine o valoare care indica daca userul are plan platit sau nu

let userName = "Bogdan";

let age = 23;

let hasPaidPlan = true;

//-- operatori aritmetici --
//   +, -, *, /
let z = x + y;
console.log(z);

// ex 3:
// sa se creeze o variabila care contine pretul; nui produs.
//  sa se creeze o variabila care contine cota tva aplicata acelui produs
//  sa se creeze o variabila care contine pretul prousului cu tot cu tva

var productPrice = 100;

var vatPercantage = 19;

var totalProductPrice = productPrice + (vatPercantage * productPrice) / 100;
console.log(totalproductPrice);

// -- operatori de comparatie --
//  <, <=, ===, !==, >, >=,
// Observatie: un operator de comparatie pus intre 2 numere rezulta => valoare boolean
// console.log(x < y); true

// -- If / else statments --
// intotdeauna in if o sa ai comparatii
// daca comparatia este true se executa codul dintre acoladele de dupa
if (x < y) {
  console.log("x este mai mic decat y");
} else {
  console.log("x este mai mare decat y");
}

// ex: 4;
// daca varsta userului este mai mica decat 18 sa se afiseze in consola "minor " in caz contrar sa se afiseze in cosola major

if (age < 18) {
} else {
  console.log("Minor");
  console.log("Major");
}
