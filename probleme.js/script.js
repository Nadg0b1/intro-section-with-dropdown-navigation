// luam fiecare caracter pe rand din url pana cand ajungem la /

// varianta 1

const extractDetailsPageLink = (currentURL) => {
  let result = "";
  let numberOfSlash = 0;

  for (let i = 0; i < currentURL.length; i++) {
    if (currentURL[i] === "/") {
      numberOfSlash++;
    }
    if (numberOfSlash < 3) {
      result += currentURL[i];
    }
  }
  return result;
};

console.log(
  extractDetailsPageLink("/event/concert-vocalsimfonic-212/reserve-seats")
);
// varianta 2

const extractDetailsPageLink2 = (currentURL) => {
  let result = "";
  const lastIndexOfSlash = currentURL.lastIndexOf("/");

  for (let i = 0; i < currentURL.length; i++) {
    result += currentURL[i];
  }

  return result;
};

// varianta 3

const extractDetailsPageLink3 = (currentURL) => {
  const lastIndexOfSlash = currentURL.lastIndexOf("/");
  const result = currentURL.substring(0, lastIndexOfSlash);

  return result;
};
