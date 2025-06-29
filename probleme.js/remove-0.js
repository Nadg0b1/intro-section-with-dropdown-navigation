const removeZeros = (numbers) => {
  let result = [];

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] !== 0) {
      result.push(numbers[i]);
    }
  }
  return result;
};
