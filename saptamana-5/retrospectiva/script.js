// Exercitiul 1
// a) Sa se creeze o variabila care contine cantitatea selectata a unui produs. Daca cantitatea este egala cu 0 sa se afiseze in consola "selecteaza minim un produs"
// b) Daca cantitatea este mai mare decat 0 sa se afiseze in consola "comanda poate fi plasata "
// c) Sa se creeze o variabila care contine pretul / unitate de produs
// Apoi daca cantitatea de produs este mai mare decat 0 sa se afisez in consola "comanda poate fi plasata . totalul este de x lei"
// d) Sa se creze o variabila care contine numele produsului . Apoi sa se actualizeze primul mesaj
// cu "selecteaza minim o unitate din produsul y." Apoi sa se actualizeze al 2-le amesaj cu
// " Ai comandat x unitati din produsul y iar totalul este de z lei "

let productName = "CocaCola";
let productQuantity = 1;
let productPricePerUnit = 100;
let productTotalPrice = productQuantity * productPricePerUnit;

if (productQuantity === 0) {
  console.log(`Selecteaza minim o unitate din ${productName}`);
} else {
  console.log(
    `Comanda poate fi plasata. Ai comandat ${productQuantity} unitati de ${productName} .Totalul este de ${productTotalPrice} lei` // backticks
  );
}

// -- Operatori logici --
// Definitie: sunt folositi pentru a face operatii logice cu valori (cel mai des vor fi valori boolean).

//  && (AND) va returna true doar daca toti operanzii sunt true
//  Il punem intre conditii care vrem sa fie indeplinite simultan
let x = 8;

// x aprtine intervalului (-5, 5)
if (x >= -5 && x <= 5) {
  console.log("X este in interval");
}

// || (OR) - va returna true daca cel putin un operant este true
// x in afara intervalului (-5, 5)
if (x < -5 || x > 5) {
  console.log("x nu este in interval");
}

// Exectitiul 2:
// acces granted
// acces denied

let isAdmin = false;
let hasProPlan = true;

if (isAdmin === true || hasProPlan === true) {
  console.log("Acces granted");
} else {
  console.log("Acces denied");
}

// Exercitiul 3:
// "You should take an umbrella" daca deja ploua afara sau daca sansele sunt peste 60%
// "You may not need an umbrella"

let isRaining = false;
let chancesToRain = 70;

if (isRaining === true || chancesToRain >= 60) {
  console.log("You should take an umbrella");
} else {
  console.log("You may not need an umbrella");
}

// Ecercitiul 4:
// lunea, martes, miercoles, jueves, viernes, sabado, domingo
// "Coffe shop is open"
// "Coffe shop is closed"

let dia = "martes";
let hora = 15;

if (dia !== "sabado" && dia !== "domingo" && hora >= 9 && hora <= 18) {
  console.log("Shop is open");
} else {
  console.log("Shop is closed");
}

// Exercitiul 5:
// Yout got a free gift
// Join the loiality program to get a gift

let spentAmmount = 240;
let isMember = false;

if (spentAmmount >= 200 && isMember === true) {
  console.log("Yout got a free gift ");
} else {
  console.log("Join the loiality program to get a gift");
}

// Exercitiul 6:
// Daca lungimea parolei este egala cu 0 ==> "Thia field is required"
// Daca lungimea parolei este mai mica decat 9 sa se aifseze in consola
// password must contain 8 caracters

let password = "lorem";

if (password.length === 0) {
  console.log("This field is required");
} else if (password.length < 8) {
  console.log("Password must contain 8 caracters");
}
