function camelCase(input) {
  input = input.toLowerCase();
  inputArray = input.split(' ');
  for (let i = 1; i < inputArray.length; i++) {
    inputArray[i] = inputArray[i].charAt(0).toUpperCase() + inputArray[i].slice(1);
  }
  return inputArray.join('');
}

//tests
console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));