// const removeEveryOther = (arr) => {
//   const result = [];
//   for (let i = 0; i < arr.length; i += 2) {
//     result.push(arr[i]);
//   }
//   return result;
// };

const removeEveryOther = (arr) => {
  const result = [];

  if (i % 2 === 0) {
    result.push(arr[i]);
  }
  return result;
};
