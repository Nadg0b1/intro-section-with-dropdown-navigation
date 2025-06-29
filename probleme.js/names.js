//1
// const capMe = (names) => {
//   const lNames = (names) =>
//     lNames.map(
//       (name) => name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()
//     );
// };
const name = "bogdan";

const capMe = (names) => {
  let result = [];
  for (let i = 0; i < name.length - 1; i++) {
    const name = names[i];
    const formatedName =
      name[0].toUpperCase() + name.substring(1, name.length - 1).toLowercase();

    result.push(formatedName);

    return result;
  }
};

// 3
// function capMe(names) {
//   let newArray = [];
//   names.forEach((name) => {
//     newArray.push(name[0].toUpperCase() + name.slice(1).toLowerCase());
//   });
//   return newArray;
// }
