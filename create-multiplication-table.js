const multiplicationTable = function(maxValue) {
	let table = "";
  for (let i = 1; i <= maxValue; i++) {
  	for (let j = 1; j <= maxValue; j++) {
    	table += (i * j);
      if (j === maxValue) {
      	table += "\n";
      }
    } 
  } return table;
};
