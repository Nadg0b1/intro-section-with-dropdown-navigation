const accordeonTitle = document.querySelector(".accordeon-title");
const acoreonContent = document.querySelector(".accordeon-content");

const handleAccordeonisOpen = () => {
  acoreonContent.style.display = "block";
};
accordeonTitle.addEventListener("click ", handleAccordeonisOpen);
