const camelCase = function(input) {
	let splitStrings = input.split(" ");
  splitStrings.forEach(function (item, index) {
  	splitStrings[index] = item.replace(item[0], item[0].toUpperCase());
  });
  let joinedString = splitStrings.join("");
  return joinedString.charAt(0).toLowerCase() + joinedString.slice(1);
};

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));
