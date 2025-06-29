// [4, 10, 10, 9] =>

const twoHighest = (arr) => {
  if (arr.length === 0) return [];

  // pasul 1 gaseste maximul din arr
  let max1 = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max1) {
      max1 = arr[i];
    }
  }
  // pasul 2. elimina maximul din arr
  const arrWithoutMax = arr.filter((number) => number !== max1);

  // pasul 3. gaseste noul maxim din arr
  let max2 = arrWithoutMax[0];

  for (let i = 1; i < arrWithoutMax.length; i++) {
    if (arrWithoutMax[i] > max2) {
      max2 = arr[i];
    }
  }

  //   returneaza cele 2 maxime
  return [max1, max2];
};

const twoHighest2 = (arr) => {
  // pasul 1. Sorteaza arr
  // pasul 2. Elimina duplicatele
  // pasul 3. Returneaza ultimele 2 elemente din array-ul sortat
};
