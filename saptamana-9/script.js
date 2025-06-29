// ["h","o","l","a"]
// ->
// "h,o,l,a"

const printAArray = (array) => {
  let result = "";

  for (let i = 0; i < array.length; i++) {
    result += array[i];
    if (i !== array.length - 1) {
      result += ",";
    }
  }
  return result;
};

const printAArray2 = (array) => {
  return array.join(",");
};
