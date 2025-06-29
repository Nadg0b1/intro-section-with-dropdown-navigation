const capitalize = (string, indexes) => {
  // 1. Creeaza o variabila result care sa contina initial un empty string
  let result = "";

  // 2. Foloseste un for pt carcurgera stringului primit prin parametru
  for (let i = 0; i < string.length; i++) {
    // 3. Daca un caracter sta oe un index care este inclus in array-ul indexes
    // atunci fa acel caracter cu uppercase si adauga-l in result. In caz contrar
    // adauga caracterul in result asa cum este
    if (indexes.includes(i)) {
      result += string[i].toUppercase();
    } else {
      result += string[i];
    }
  }
  // 4. Return Result
  return result;
};
