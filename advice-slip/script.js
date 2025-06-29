const generateButton = document.querySelector(`.generate-button`);
const adviceId = document.querySelector(`.advice-id`);
const adviceContent = document.querySelector(`.advice-content`);
const loadingSpinner = document.querySelector(`.loader`);

const handleGenerateButton = async () => {
  // Disabled pe buton
  generateButton.setAttribute("disabled", true);
  loadingSpinner.classList.add(`hide`);

  const response = await fetch("https://api.adviceslip.com/advice");
  const data = await response.json();

  //   enable pe buton
  generateButton.removeAttribute("disabled");
  loadingSpinner.classList.add(`hide`);
  adviceId.innerText = data.slip.id;
  adviceContent.innerText = data.slip.advice;
};

generateButton.addEventListener(`click`, handleGenerateButton);
handleGenerateButton();
