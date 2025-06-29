//
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const specialCaracters = ["!", "@", "#", "$", "%", "^", "&", "&", "*"];

const validateEmail = (email) => {
  // emailul nu a fost introdus
  if (email.length === 0) return "This field is required";
  // are peste 6 caractere
  if (email.length < 6) return "Invalid email";

  let numberOfAronds = 0;

  for (let i = 0; i < email.length; i++) {
    if (email[i] === "@") {
      numberOfAronds++;
    }
  }
  if (numberOfAronds !== 1) return "invalid Email";

  let numberOfDots = 0;

  for (let i = email.indexof("@") + 1; i < email.length; i++) {
    if (email[i] === ".") {
      numberOfDots++;
    }
  }
  if (numberOfDots !== 1) return "Invalid Email";

  for (let i = 0; i < email.length; i++) {
    if (specialCaracters.includes(email[i])) {
      return "Invalid Email";
    }
  }

  const indexOfArond = email.indexOf("@");

  if (email(indexOfArond - 1) === "_" || email(indexOfArond - 1) === "-")
    return "Invalid Email";
  if (email(indexOfArond + 1) === "_" || email(indexOfArond + 1) === "-")
    return "Invalid Email";
};
