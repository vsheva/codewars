function squareSum(numbers) {
  let item = 0;
  for (let i = 0; i < numbers.length; i++) {
    item += Math.pow(numbers[i], 2);
  }
  return item;
}

console.log(squareSum([1, 2, 4]));
