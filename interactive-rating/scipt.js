const buttnOne = document.querySelector(".rating-button-one");

// 1. userul face click pe buton
// 2. din js adaugam clasa selected-rating
// 3. din css se adauga automat pe buton proprietatile clasei selected rating

const handleButtonOneClick = () => {
  buttnOne.classList.add(".selected-rating");
};

buttnOne.addEventListener("click", handleButtonOneClick);

// 2
const buttnTwo = document.querySelector(".rating-button-two");

const handleButtonTwoClick = () => {
  buttnOne.classList.add(".selected-rating");
};

buttnOne.addEventListener("click", handleButtonTwoClick);

//3
const buttnThree = document.querySelector(".rating-button-three");

const handleButtonThreeClick = () => {
  buttnOne.classList.add(".selected-rating");
};

buttnOne.addEventListener("click", handleButtonThreeClick);

// Top 3 cele mai comune cazuri in care folosim Dom-ul:
// 1) Sa selectam elemente.
// 2) Sa adaugam clase / sa stergem clase / sa modificam clase.
// 3) Sa adaugam event listener (in special pe butoane).

// --- Submit button ---

const submitButton = document.querySelector(".rating-submit-button");
const secondStepContainer = document.querySelector(".second-step");
const userSelection = document.querySelector(".user-selection");

const handleSubmit = () => {
  const currentlySelectedButton = document.querySelector(".selected-button");
  if (currentlySelectedButton !== null) {
    firstStepContainer.style.display = "none";
    secondStepContainer.style.display = "block";
    userSelection.textContent = currentlySelectedButton.textContent;
  } else {
    alert("Please select a rating");
  }
};

submitButton.addEventListener("click", handleSubmit);
