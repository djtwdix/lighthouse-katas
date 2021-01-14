const numberOfVowels = function(data) {
	let vowelAmount = 0;
  for (let i = 0; i < data.length; i++) {
  	if (data[i] === "a" || data[i] === "e" || data[i] === "i" || data[i] === "o" || data[i] === "u") {
    	vowelAmount += 1
    }
  } return vowelAmount;
};

console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));