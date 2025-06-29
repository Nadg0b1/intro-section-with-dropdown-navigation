const popover = document.getElementById("popover");
const button = popover.querySelector(".popover-button");

button.addEventListener("click", () => {
  popover.classList.toggle("show");
});

document.addEventListener("click", (e) => {
  if (!popover.contains(e.target)) {
    popover.classList.remove("show");
  }
});
