const sumLargestNumbers = function(data) {
  data.sort((a, b) => b - a); //sorts the array from largest number to smallest number
  return data[0] + data[1];
};

//tests
console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));





