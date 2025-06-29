// algoritm suma numere din array

// let numbers = [15, 3, 32, -2];
// let sum = 0;

// for (let i = 0; i < numbers.length; i++) {
//   sum += numbers[i];
// }

// let average = sum / numberrs.length;
// console.log(average);

// Ex: 1
// algoritn calculare maxin din array
// let peaks = [1800, 3400, 2000, 3000];
// //            0     1     2     3
// let max = peaks[0];
// // varianta scalabila
// for (let i = 1; i < peaks.length; i++) {
//   if (peaks[i] > max) {
//     max = peaks[i];
//   }
// }
// varianta nescalabila
// if (peaks[1] > max) {
//   max = peaks[1];
// }

// if (peaks[2] > max) {
//   max = peaks[2];
// }

// if (peaks[3] > max) {
//   max = peaks[3];
// }

// console.log(max);

// algoritm aflare minim din array
// let min = peaks[0];

// for (let i = 1; i < peaks.length; i++) {
//   if (peaks[i] < min) {
//     min = peaks[i];
//   }
// }

// -- Algoritm aflare maxim par din array --
// sa se creeze un algoritm care sa afisez´in consola cel mai mare nr par din array
// "cel mai mare nr par este"
// daca array-ul nu contine niciun nr par sa se afiseze" array-ul nu contine nr pare

// -- nu este buna daca primul numar din arrayeste impar si daca mai mare decat numarul par
// let numbers = [20, 5, 8, 32, -10, 55];
// let max = numbers[0];

// for (let i = 1; i < numbers.length; i++) {
//   if (numbers[i] > max && numbers[i] % 2 === 0) {
//     max = numbers[i];
//   }
// }

// console.log(max);

// -- varianta Gabi --

// let numbers = [20, 5, 8, 32, -10, 55];
// let min = numbers[0];

// for (let i = 1; i < numbers.length; i++) {
//   if (numbers[i] < min) {
//     min = numbers[i];
//   }
// }
// let max = min;

// for (let i = 1; numbers.length; i++) {
//   if (numbers[i] % 2 === 0 && numbers[i] > max) {
//     max = numbers[i];
//   }
// }

// if (max % 2 === 1) {
//   console.log("array-ul nu contine numere pare");
// } else {
//   consol.log(`cel mai mare numar par este ${max}`);
// }

// --Varianta yo--
// let numbers = [41, 5, 8, 32, -10, 55];
// let evenNumbers = [];

// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i] % 2 === 0) {
//     evenNumbers.push(numbers[i]);
//   }
// }
// let max = evenNumbers[0];

// for (let i = 1; i < evenNumbers.length; i++) {
//   if (evenNumbers[i > max]) {
//     max = evenNumbers[i];
//   }
// }

// -- Algoritm numarare aparitii

// let numers = [41, 5, 0, 8, 32, -10, 55, 0];
// //  sa se afiseze de cate ori apare 0 in array
// let counter = 0;

// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i] === 0) {
//     counter++;
//   }
// }
// console.log(counter);

//
