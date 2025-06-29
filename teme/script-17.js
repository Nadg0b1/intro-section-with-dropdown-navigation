// Tema 26 martie 2025:
// 1) Sa se creeze o variabila x care sa contina un numar. Daca valoarea variabilei este mai mare sau egala cu 0
// sa se afiseze in consola "The number is positive", in caz contrar "The number is negative"

let x = 15;

if (x >= 0) {
  console.log("The number is positive");
} else {
  console.log("The number is negative");
}

// 2) Sa se creeze o variabila care contine nota unui student la un examen ( va fi intre 1-10 ).
//  Daca nota este mai mica decat 5, sa se afiseze in consola "Picat", altfel "Promovat"

let notaStudent = 7;

if (notaStudent < 5) {
  console.log("Picat");
} else {
  console.log("Promovat");
}

// 3) Sa se creeze o variabila care contine username-ul unui utilizator.
// Daca lungimea lui va fi mai mare decat 50, atunci sa se afiseze in consola "Too long", in caz contrar "Good".

let username = "UserName";

if (username.length > 50) {
  console.log("Too long");
} else {
  console.log("Good");
}
