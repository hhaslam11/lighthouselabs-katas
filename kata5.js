const urlEncode = function(text) {
  text = text.trim().split('');
  for (let i = 0; i < text.length; i++){
    if(text[i] === ' ') text[i] = '%20';
  }
  return text.join('');
};

//tests
console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));
