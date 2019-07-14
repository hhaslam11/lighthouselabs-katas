const repeatNumbers = function(data) {
  let numberSet = '';
  for(let i = 0; i < data.length; i++) {
    for(let x = 0; x < data[i][1]; x++) numberSet += data[i][0]; //add numbers to numberSet
    if (i !== data.length - 1) numberSet += ', '; //add comma if not on the last nubmerset
  }
  return numberSet;
}