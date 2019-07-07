const vowels = ['a', 'e', 'i', 'o', 'u'];

const numberOfVowels = function(data) {
  let totalVowels = 0;
  for (let dataIndex = 0; dataIndex < data.length; dataIndex++){
    for (let vowelsIndex = 0; vowelsIndex < vowels.length; vowelsIndex++){
      if (data[dataIndex] === vowels[vowelsIndex]) totalVowels++; 
    }
  }
  return totalVowels;
};

//tests
console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));