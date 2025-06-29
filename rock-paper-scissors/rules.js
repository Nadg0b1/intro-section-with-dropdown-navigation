const rulesButton = document.querySelector(`.rules-button`);
const rulesButtonExit = document.querySelector(`.rules-button-exit`);
const upperSectionContainer = document.querySelector(
  `.upper-section-container`
);
const body = document.querySelector(`body`);
const rules = document.querySelector(`.rules-content`);

handleRulesButton = () => {
  upperSectionContainer.classList.add(`hide`);
  finalResultContainer.classList.add(`hide`);
  playerOptionsContainer.classList.add(`hide`);
  rulesButton.classList.add(`hide`);
  rulesButtonExit.classList.remove(`hide`);
  //   Body Background
  document.body.style.backgroundImage = "none";
  document.body.style.backgroundColor = "white";
  //   content
  rules.classList.remove(`hide`);
};

rulesButton.addEventListener(`click`, handleRulesButton);

const originalImage = getComputedStyle(document.body).backgroundImage;
const originalColor = getComputedStyle(document.body).backgroundColor;

handleRulesButtonExit = () => {
  upperSectionContainer.classList.remove(`hide`);
  playerOptionsContainer.classList.remove(`hide`);
  rulesButton.classList.remove(`hide`);
  rulesButtonExit.classList.add(`hide`);
  //   Body Background
  document.body.style.backgroundImage = originalImage;
  document.body.style.backgroundColor = originalColor;
  //   content
  rules.classList.add(`hide`);
};

rulesButtonExit.addEventListener(`click`, handleRulesButtonExit);
