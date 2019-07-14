function camelCase(input) {
  input = input.toLowerCase();
  inputArray = input.split(' ');
  for (let i = 1; i < inputArray.length; i++) {
    inputArray[i][0] = inputArray[i][0].toUpperCase();//TODO: make inputArray[1][0] uppercase. for some reason you cant do this directly
  }
  return inputArray.join('');
}

console.log(camelCase('This is a test'));