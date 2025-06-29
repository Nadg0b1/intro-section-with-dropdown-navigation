const form = document.querySelector(".card-form");
const secondStepContainer = document.querySelector(".second-step-container");
const cardholderNameError = document.querySelector(".cardholder-name-error");
const cardNumberError = document.querySelector(`#card-number`);
const cardNumberNameError = document.querySelector(".card-number-error");

const forbiddenCharacters = ["1", "2", "3"];
let isSubmitted = false;

const handleSubmit = (e) => {
  e.preventDefault();

  isSubmitted = true;

  const data = new FormData(e.target);

  // ---------- Cardholder name ----------
  const cardholderName = data.get("cardholder-name");

  const cardholderNameIsValid = validateName(cardholderName);

  // --------- Go to next step ( varianta B ) -----------
  cardNumberIsValid === false;
  if (cardholderNameIsValid === false) {
    form.classList.add("hide");
    secondStepContainer.classList.remove("hide");
  }

  // --------- Go to next step ( varianta A ) -----------
  // const displayedError = document.querySelector(".input-error:not(.hide)");

  // if (displayedError === null) {
  //   form.classList.add("hide");
  //   secondStepContainer.classList.remove("hide");
  // }
};

form.addEventListener("submit", handleSubmit);

// ---------- Cardholder name input ----------
const cardholderNameInput = document.querySelector("#cardholder-name");
const cardFrontName = document.querySelector(".card-front-name");
const cardFrontNumber = document.querySelector(`.card-front-number`);

const handleCardholderNameChange = () => {
  // CardHolderName
  if (cardholderNameInput.value.length === 0) {
    cardFrontName.innerText = "JANE APPLESEED";
  } else {
    cardFrontName.innerText = cardholderNameInput.value;
  }

  if (isSubmitted === true) {
    validateName(cardholderNameInput.value);
  }
};

cardholderNameInput.addEventListener("input", handleCardholderNameChange);

const validateName = (name) => {
  cardholderNameError.classList.add("hide");
  cardNumberNameError.classList.add("hide");
  // 1. required
  if (name.length === 0) {
    cardholderNameError.classList.remove("hide");
    cardNumberNameError.classList.remove(`hide`);
    cardholderNameError.innerText = "This field is required.";
    cardNumberNameError.innerText = "This field is required.";
    return false;
  }

  // 2. verificare caractere interzise (gen numere, \, ? etc)
  //   "Cristian10"
  for (let i = 0; i < name.length; i++) {
    if (forbiddenCharacters.includes(name[i])) {
      cardholderNameError.classList.remove("hide");
      cardholderNameError.innerText = "Must contain only letters";
      return false;
    }
  }
  // 3. limita maxima de 256 caractere
  if (name.length > 256) {
    cardholderNameError.classList.remove("hide");
    cardholderNameError.innerText = "Maximum number of characters is 256";
    return false;
  }

  return true;
};

// ---------- Card number input ----------
const cardNumberInput = document.querySelector("#card-number");

const handleCardNumberChange = () => {
  // sau seteaza maxlength pe input
  // "1234 1234 1234 12348" (length 20)
  // -> "1234 1234 1234 1234"
  if (cardNumberInput.value.length > 19) {
    cardNumberInput.value = cardNumberInput.value.slice(0, 19);
  }

  // exemplu: "123456789" -> "1234 5678 9"
  // pasul 1) luam valoarea inputului fara spatii
  const currentNumber = cardNumberInput.value.replaceAll(" ", "");

  // pasul 2) adaugam spatii in valoarea inputului
  let formattedNumber = "";

  // currentNumber = "673128357187"
  // formattedNumber = "" + "6" + "7" + "3" + "1" + " " + "2"
  for (let i = 0; i < currentNumber.length; i++) {
    if (i > 0 && i % 4 === 0) {
      formattedNumber += " ";
    }
    formattedNumber += currentNumber[i];
  }

  // pasul 3) inseram in input noua valoare
  cardNumberInput.value = formattedNumber;
};

cardNumberInput.addEventListener("input", handleCardNumberChange);
