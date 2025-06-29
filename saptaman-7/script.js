// functie
// alert("Hello");

// prompt

// const handleUserAcces = () => {
//   let age = prompt("how old are you?");
//   age = Number(age);

//   if (age < 18) {
//     alert("Acces forbidden");
//   } else {
//     alert("Acces granted.");
//   }
// };

// Q: Cand se executa codul dintr-o functie ?
// A: Atunci cand functia este apelata.

handleUserAcces();

// Q: Ce cod poate executa o fnctie ?
// A: Orice linie de cod .

// Q: Cand creezi o functie?
// A: -Atunci cand vrei ca niste linii de cod sa se execute ca urmare a
// unui eveniment
//    -Atunci cand vrei sa reutilizezi niste linii de cod fara sa le repeti

// Functie utilitara
const getTotalProducePrice = (basePrice, taxRate, shippingFee) => {
  const totalPrice = basePrice + (basePrice * taxRate) / 100 + shippingFee;
  return totalPrice;
};
// Product A - Page - 100, 10, 15
const productB = {
  id: 255,
  name: "Product B",
  isSoldOut: false,
  price: 2,
  tax: 10,
  fee: 25,
};

const productBTotalPrice = getTotalProducePrice(
  productB.price,
  productB.tax,
  productB.fee
);

// -- Return-ul unei functii --
// - nu este obligatoriu -
// - incheie executia functiei -
// - returneaza mereu o singura valoare -
// - poate returna orice tip de data (number, string, boolean, array, object)-
// - o functie by default retueneaza undefined

// --------------------------------------------
// Exercitiul 1:
// Sa sse creeze o functie care are 2 parametri
// primu sa fie pretul unui zbor si
//  statusul userului actual (member or not )
// Daca este membru sa se returneze pretul zborului - 10%
// altfel sa se returneze pretul intreg

const getFlightPrice = (price, isMember) => {
  if (isMember === true) {
    return price - price * 0.1;
  } else {
    return price;
  }
};

const flightOne = getFlightPrice(500, true);
// -----------------------------------------------
// Exercitiul 2:
// Sa se creeze o functie care are 3 parametri - pretul unei cafele
// - statusul clientului (membru sau nu )
// -statusul clientului (student sau nu )
// daca este membru sau student sa se returneze pretul cafelei -15%
//  in caz contrar sa se returneze pretul intreg

let coffePrice = 19;
let isMember = true;
let isStudent = true;

const getCoffeePrice = (coffeePrice, isMember, isStudent);

if (isMember === true || isStudent === true) {
  return coffePrice - coffePrice * 0.15;
} else {
  return coffePrice;
}
// Exercitiul 3: sa se creeze o functie care a re un parametru parola unui user
//  Daca parola este empty atunci sa se returneze "This field is required"
// Daca parola nu indeplineste niciun criteiu => "mverryweek password "
//  Daca parola indeplineste un criteiu"Week password"
//  Daca parola indeplineste 2 criteii "Medium password"
//  Daca parola indeplineste u3 criteii"Week password"

// sa contina macar un numar
//  sa contina macar o litera mare
//  sa contina un caracter special

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const specialCaracters = ["!", "@", "#", "$", "%", "^", "&", "&", "*"];

const validatePassword = (password) => {
  if (password.length === 0) {
    return "This field is required";
  }
  if (password.length < 8) {
    return "Must contain al least 8 caracters";
  }
  let criterias = 0;

  if (password.includes(numbers)) {
    criterias++;
    for (let i = 0; i < numbers.length; i++) {
      if (password.includes(numbers[i])) {
        criterias++;
      }
    }
  }

  if (password !== password.toLowerCase()) {
    criterias++;
  }

  if (criterias === 0) {
    return "Verry week Password";
  }
  if (criterias === 1) {
    return "Week Password";
  }
  if (criterias === 2) {
    return "Medium Password";
  }
  return "Strong password";
};

// --- Scope ---

//  Scope-ul reprezinta contextul curent de exect=utie in care valorile
// si exoresiile pot fi folosite .
//  Daca o variabila sau expresie nu este in scope-ul curent atunci nu poate fi folosita

//  "... is not defined "

//  Tipuri de scope-uri
// - Global- (toate variabilele, toate constantele globale )
// - Module scope-
// - function scope - (Scope creat de o solutie )
// - Block scope -  ( Un scope creat de if, else if, for)

// Scop-urile sunt organizate intr-o ierarhie
// global scope -> function scope -> block scope

// Un scope copil poate accesa un scope parinte
