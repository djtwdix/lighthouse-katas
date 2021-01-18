const repeatNumbers = function(arr) {
  let numbersRepeated = "";
  for (let i = 0; i < arr.length; i++) {
    if (numbersRepeated != "") {
  	numbersRepeated += ", "
  }
    for (let j = 0; j < arr[i][1]; j++) {
      numbersRepeated += arr[i][0];
    }
  } return numbersRepeated;
}

console.log(repeatNumbers([
  [1, 10]
]));

console.log(repeatNumbers([
  [1, 2],
  [2, 3]
]));

console.log(repeatNumbers([[10, 4], [34, 4], [92, 2]]));
