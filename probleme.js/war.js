const left = { w: 4, p: 3, b: 2, s: 1 };
const right = { m: 4, q: 3, d: 2, z: 1 };

// let alphabetWar = (fight) => {
//   let score = 0;

//   for (let i = 0; i < fight.length; i++) {
//     const char = fight[i];

//     if (left[char]) {
//       score += left[char];
//     } else if (right[char]) {
//       score -= right[char];
//     }
//   }
// };

// let alphabetWar = (fight) => {
//   // 1. Creeaza 2 variabile leftsidePowersi rightsidePover. abbele trebuie
//   //  sa fie initializate cu valoarea 0.
//   let leftSidePower = 0;
//   let rightSidePower = 0;
//   // 2.Parcurge string-ul fight ia fiecare litera in parte si calculeaza cele 2
//   //  sume de puteri
//   for (let i = 0; i < fight.length; i++) {
//     if (fight[i] === "W") {
//       leftSidePower += 4;
//     } else if (fight[i] === "p") {
//       leftSidePower += 3;
//     } else if (fight[i] === "b") {
//       leftSidePower += 2;
//     } else if (fight[i] === "s") {
//       leftSidePower += 1;
//     } else if (fight[i] === "m") {
//       rightSidePower += 4;
//     } else if (fight[i] === "q") {
//       rightSidePower += 3;
//     } else if (fight[i] === "d") {
//       rightSidePower += 2;
//     } else if (fight[i] === "z") {
//       rightSidePower += 1;
//     }
//   }
//   // 3. Returneaza un mesaj in functie de cele 2 sume .
//   if (leftSidePower > rightSidePower) return "Left side wins";
//   if (leftSidePower < rightSidePower) return "Right side wins";
//   return "Let's fight again!";
// };

let alphabetWar = (fight) => {
  // 1.
  let leftSidePower = 0;
  let rightSidePower = 0;
  //   2.
  for (let i = 0; i < fight.length; i++) {
    switch (fight[i]) {
      case "w":
        leftSidePower += 4;
        break;
    }
  }

  // 3. Returneaza un mesaj in functie de cele 2 sume .
  if (leftSidePower > rightSidePower) return "Left side wins";
  if (leftSidePower < rightSidePower) return "Right side wins";
  return "Let's fight again!";
};
