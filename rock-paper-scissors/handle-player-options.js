const playerOptionsContainer = document.querySelector(
  ".player-options-container"
);
const paperButton = document.querySelector(".paper-button");
const scissorsButton = document.querySelector(".scissors-button");
const rockButton = document.querySelector(".rock-button");
const finalResultContainer = document.querySelector(".final-result-container");
const selectedOptionImage = document.querySelector(".selected-option-image");
const houseOptionImage = document.querySelector(".house-option-image");
const finalResultText = document.querySelector(".final-result-text");

let selectedOption;
const options = ["scissors", "paper", "rock"];
//                   0          1        2

const handleChoosePaper = () => {
  selectedOption = "paper";
  playerOptionsContainer.classList.add("hide");
  finalResultContainer.classList.remove("hide");
  selectedOptionImage.setAttribute("src", "./assets/paper.svg");

  const randomIndex = Math.floor(Math.random() * 3);
  const houseOption = options[randomIndex];
  houseOptionImage.setAttribute("src", `./assets/${houseOption}.svg`);

  const finalResult = getFinalResult(selectedOption, houseOption);
  finalResultText.innerText = finalResult;
};

paperButton.addEventListener("click", handleChoosePaper);

const handleChooseScissors = () => {
  selectedOption = "scissors";
  playerOptionsContainer.classList.add("hide");
  finalResultContainer.classList.remove("hide");
  selectedOptionImage.setAttribute("src", "./assets/scissors.svg");

  const randomIndex = Math.floor(Math.random() * 3);
  const houseOption = options[randomIndex];
  houseOptionImage.setAttribute("src", `./assets/${houseOption}.svg`);

  const finalResult = getFinalResult(selectedOption, houseOption);
  finalResultText.innerText = finalResult;
};

scissorsButton.addEventListener("click", handleChooseScissors);

const handleChooseRock = () => {
  selectedOption = "rock";
  playerOptionsContainer.classList.add("hide");
  finalResultContainer.classList.remove("hide");
  selectedOptionImage.setAttribute("src", "./assets/rock.svg");

  const randomIndex = Math.floor(Math.random() * 3);
  const houseOption = options[randomIndex];
  houseOptionImage.setAttribute("src", `./assets/${houseOption}.svg`);

  const finalResult = getFinalResult(selectedOption, houseOption);
  finalResultText.innerText = finalResult;
};

rockButton.addEventListener("click", handleChooseRock);
