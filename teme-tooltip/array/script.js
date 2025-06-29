function countZeros(array) {
  let count = 0;
  for (let num of array) {
    if (num === 0) {
      count++;
    }
  }
  return count;
}
