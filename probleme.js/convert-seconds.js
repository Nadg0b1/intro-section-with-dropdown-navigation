//  Sa se creeze o functie care primeste ca parametru un numar de secunde
// Functia trebuie sa returneze conversia numarului de secunde in
// formatul:  hh:mm:ss

const convertSecondsInSpecificTimeFormat = (totalSecunde) => {
  const ore = Math.floor(totalSecunde / 3600);
  const minute = Math.floor((totalSecunde - ore * 3600) / 60);
  const secunde = totalSecunde - ore * 3600 - minute * 60;

  const formatedHours = ore < 10 ? "0" + ore : ore;
  const formatedMinutes = minute < 10 ? "0" + minute : minute;
  const formatedSeconds = secunde < 10 ? "0" + secunde : secunde;

  return `${formatedHours}:${formatedMinutes}:${formatedSeconds}`;
};

convertSecondsInSpecificTimeFormat(4500);
