function makeTable(size) {
  for (let y = 1; y <= size; y++) {
    let row = '';
    for (let x = 1; x <= size; x++) {
      row += (x * y) + ' ';
    }
    console.log(row);
  }
}