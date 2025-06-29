const resetButton = document.querySelector(".reset-button");

const handleResetGame = () => {
  finalResultContainer.classList.add("hide");
  playerOptionsContainer.classList.remove("hide");
};

resetButton.addEventListener("click", handleResetGame);
