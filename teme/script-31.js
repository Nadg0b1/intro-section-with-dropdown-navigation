// folosind un for loop sa se afiseze in consola toate numerele de la 10 la 20
// folosind un for loop sa se afiseze in consola toate numerele multiplii de 3 de la 10 la 30
// folosind un for loop sa se afisze in consola toate numerele de la 1 la 10 ca mai jos:
// "1 - impar"
// "2 - par"
// "3 - impar"
// ...
// "10 - par"
// Practic trebuie afisat numarul, apoi, tot in acelasi string, daca este par sau nu.
// 4.sa se creeze un array cu numere. folosind un for loop sa se calculeze suma numerelor impare
// 5.sa se creeze un array cu numere. folosind un for loop sa se calculeze suma numerelor pare pozitive

// 1.
for (let i = 10; i <= 20; i++) {
  console.log(i);
}

// 2.
for (let i = 10; i <= 30; i++) {
  if (i % 3 === 0) {
    console.log(i);
  }
}

// 3.
for (let i = 1; i <= 10; i++) {
  let tipNumar = "";
  if (i % 2 === 0) {
    tipNumar = "par";
  } else {
    tipNumar = "impar";
  }
  console.log(`${i} - ${tipNumar}`);
}

// 4.
const numereArray1 = [1, 5, 8, 12, 3, 9, 10, 7];
let sumaImpare = 0;

for (let i = 0; i < numereArray1.length; i++) {
  if (numereArray1[i] % 2 !== 0) {
    sumaImpare += numereArray1[i];
  }
}

console.log("Array-ul: ", numereArray1);
console.log("Suma numerelor impare: ", sumaImpare);

// 5.
const numereArray2 = [2, -4, 6, 0, 10, -8, 14, 5, 1];
let sumaParePozitive = 0;

for (let i = 0; i < numereArray2.length; i++) {
  if (numereArray2[i] % 2 === 0 && numereArray2[i] > 0) {
    sumaParePozitive += numereArray2[i];
  }
}

console.log("Array-ul: ", numereArray2);
console.log("Suma numerelor pare pozitive: ", sumaParePozitive);
