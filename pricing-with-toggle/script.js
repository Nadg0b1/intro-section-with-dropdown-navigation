const toggle = document.querySelector(`.toggle`);
const monthlyPrices = document.querySelectorAll(`.monthly-price`);
const annualyPrices = document.querySelectorAll(`.annualy-price`);

let isMonthly = true;

const handleToggle = () => {
  // Varianta 1
  //   console.log(e.target.checked);

  //   Varianta 2 (if/else)
  //   if (isMonthly === true) {
  //     isMonthly = false;
  //   } else {
  //     isMonthly = true;
  //   }

  //   // Varianta 3 (ternary operator)
  //   isMonthly = isMonthly === true ? false : true;

  //   //   Varianta 4(NOT operator)
  isMonthly = !isMonthly;

  if (isMonthly === false) {
    annualyPrices.forEach((monthlyPrices) => {
      monthlyPrices.classList.add(`hide`);
    });
    monthlyPrices.forEach((annualyPrices) => {
      annualyPrices.classList.remove(`hide`);
    });
  }
};

toggle.addEventListener(`change`, handleToggle);
