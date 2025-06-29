const getPlanetData = async () => {
  const response = await fetch("./data.json");
  const data = await response.json();

  console.log(data);

  const startIndex = window.location.pathname.lastIndexOf("/");
  const lastIndex = window.location.pathname.indexOf(".");
  const planetName = window.location.pathname.slice(startIndex + 1, lastIndex); // "venus"
  console.log(planetName);

  // context: avem un array de obiecte. fiecare obiect contine info despre o planeta anume
  // noi vrem sa luam din array acel obiect care contine info despre planeta pe a carei pagina suntem noi
  // noi stim ce planeta cautam in functie de planetName.
  const planetData = data.find(
    (element) => element.name.toLowerCase() === planetName
  );

  console.log(planetData);

  const planetSection = document.createElement("section"); // <section></section>
  planetSection.innerHTML = `
    <img src="${planetData.images.planet}" />
    <h1>${planetData.name}</h1>
    <p>${planetData.overview.content}</p>
    <div>
      <span>Source: </span>
      <a href="${planetData.overview.source}">
        Wikipedia
        <img src="./assets/icon-source.svg" />
      </a>
    </div>
  `;
  document.body.appendChild(planetSection);
};

getPlanetData();

// -----------------  TABS -----------------
const planetOverviewButton = document.querySelector(".planet-overview-button");
const planetStructureButton = document.querySelector(
  ".planet-structure-button"
);
const planetSurfaceButton = document.querySelector(".planet-surface-button");

const handleDisplayPlanetOverview = () => {
  // sterge clasa selected-tab de pe butonul selectat in prezent
  const currentlySelectedTab = document.querySelector(".selected-tab");
  currentlySelectedTab.classList.remove("selected-tab");
  // adauga clasa selected-tab pe noul buton selectat
  planetOverviewButton.classList.add("selected-tab");
};

planetOverviewButton.addEventListener("click", handleDisplayPlanetOverview);

const handleDisplayPlanetStructure = () => {
  // sterge clasa selected-tab de pe butonul selectat in prezent
  const currentlySelectedTab = document.querySelector(".selected-tab");
  currentlySelectedTab.classList.remove("selected-tab");
  // adauga clasa selected-tab pe noul buton selectat
  planetStructureButton.classList.add("selected-tab");
};

planetStructureButton.addEventListener("click", handleDisplayPlanetStructure);

const handleDisplayPlanetSurface = () => {
  // sterge clasa selected-tab de pe butonul selectat in prezent
  const currentlySelectedTab = document.querySelector(".selected-tab");
  currentlySelectedTab.classList.remove("selected-tab");
  // adauga clasa selected-tab pe noul buton selectat
  planetSurfaceButton.classList.add("selected-tab");
};

planetSurfaceButton.addEventListener("click", handleDisplayPlanetSurface);
