// const removeExclamationMarks = (s) => {
// 1. Creem o variabila result care este initial egala cu un string gol
let result = "";
// 2. Creem o noua variabila care are coate caracterele din parametrul s cu exceptia "!"

for (let i = 0; i < s.length; i++) {
  if (s[i] !== "!") {
    result += s[i];
  }
}
//   3. Returneaza noua variabila
return result;

removeExclamationMarks("!Ab!!!!c!");

// Varianta 2

const removeExclamationMarks = (s) => s.replace("!", "");
