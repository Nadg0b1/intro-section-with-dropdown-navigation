const form = document.querySelector(".calculator-form");
const firstNumberError = document.querySelector(`.first-number-error`);
const operatorError = document.querySelector(`.operator-error`);
const formResult = document.querySelector(`.calculator-form-result`);
const secondNumberError = document.querySelector(`.second-number-error`);
const resetButton = document.querySelector(`.reset-button`);

let isSubmitted = false;

handleSubmit = (e) => {
  e.preventDefault();

  isSubmitted = true;

  validateFirstNumber();
  validateOperator();
  validateSecondNumber();

  const calculatorFormError = document.querySelector(
    `.calculator-form-error:not(.hide)`
  );
  if (calculatorFormError === null) {
    const data = new FormData(form);

    const firstNumber = Number(data.get("first-number"));
    const secondNumber = Number(data.get("second-number"));
    const operator = data.get(`operator`);

    let result;
    if (operator === `+`) {
      result = firstNumber + secondNumber;
    } else if (operator === `-`) {
      result = firstNumber - secondNumber;
    } else if (operator === `*`) {
      result = firstNumber * secondNumber;
    } else if (operator === `/`) {
      result = firstNumber / secondNumber;
    }

    formResult.innerText = result;
  }
};

form.addEventListener("submit", handleSubmit);

const handleResetButton = () => {
  isSubmitted = false;

  document.querySelector(`#first-number`).value = "";
  document.querySelector(`#second-number`).value = "";
  document.querySelector(`#operator`).value = "";
  formResult.innerText = "";

  firstNumberError.classList.add("hide");
  secondNumberError.classList.add("hide");
  operatorError.classList.add("hide");
};

resetButton.addEventListener(`click`, handleResetButton);

const firstNumberinput = document.querySelector(`#first-number`);

handleFirstNumberInputChange = () => {
  if (isSubmitted === true) {
    validateFirstNumber();
  }
};

firstNumberinput.addEventListener(`input`, handleFirstNumberInputChange);

const operatorInput = document.querySelector(`#operator`);

handleOperatorInput = () => {
  if (isSubmitted === true) {
    validateOperator();
  }
};

operatorInput.addEventListener(`input`, handleOperatorInput);

const secondNumerInput = document.querySelector(`#second-number`);

handleSecondNumberInputChange = () => {
  if (isSubmitted === true) {
    validateSecondNumber();
  }
};

secondNumerInput.addEventListener(`input`, handleSecondNumberInputChange);

const validateFirstNumber = () => {
  const data = new FormData(form);

  const firstNumber = data.get("first-number");

  if (firstNumber.length === 0) {
    firstNumberError.classList.remove(`hide`);
  } else {
    firstNumberError.classList.add("hide");
  }
};

const validateOperator = () => {
  const data = new FormData(form);

  const operator = data.get(`operator`);

  if (operator.length === 0) {
    operatorError.classList.remove(`hide`);
  } else {
    operatorError.classList.add("hide");
  }
};

const validateSecondNumber = () => {
  const data = new FormData(form);

  const secondNumber = data.get("second-number");

  if (secondNumber.length === 0) {
    secondNumberError.classList.remove(`hide`);
  } else {
    secondNumberError.classList.add("hide");
  }
};
