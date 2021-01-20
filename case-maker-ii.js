const makeCase = function(input, caseStyle) {
  let caseArray = [];
  let styledString = input;
  //check if caseStyle is string or array, split and assign to caseArray if necessary otherwise just assign to caseArray
  if (typeof caseStyle === "string") {
    caseArray = caseStyle.split();
  } else {
    caseArray = caseStyle;
  }
  //iterate through case array to determine caseStyle and call appropriate function on string
  for (let i = 0; i < caseArray.length; i++) {
    if (caseArray[i] === "camel") {
      styledString = toCamel(styledString);
    }
    if (caseArray[i] === "pascal") {
      styledString = toPascal(styledString);
    }
    if (caseArray[i] === "snake") {
      styledString = toSnake(styledString);
    }
    if (caseArray[i] === "kebab") {
      styledString = toKebab(styledString);
    }
    if (caseArray[i] === "title") {
      styledString = toTitle(styledString);
    }
  }
  for (let i = 0; i < caseArray.length; i++) {
    if (caseArray[i] === "vowel") {
      styledString = toVowel(styledString);
    }
    if (caseArray[i] === "consonant") {
      styledString = toConsonant(styledString);
    }
  }
  for (let i = 0; i < caseArray.length; i++) {
    if (caseArray[i] === "upper") {
      styledString = styledString.toUpperCase();
    }
    if (caseArray[i] === "lower") {
      styledString = styledString.toLowerCase();
    }
  } return styledString; 
}; 

//convert to camelCase function
const toCamel = function(string) {
  let splitStrings = string.split(" ")
  splitStrings.forEach(function(item, index) {
    splitStrings[index] = item.replace(item[0], item[0].toUpperCase());
  });
  let joinedString = splitStrings.join("");
  return joinedString.charAt(0).toLowerCase() + joinedString.slice(1);
}

//convert to Pascal function
const toPascal = function(string) {
  let splitStrings = string.split(" ");
  splitStrings.forEach(function(item, index) {
    splitStrings[index] = item.replace(item[0], item[0].toUpperCase());
  });
  let joinedString = splitStrings.join("");
  return joinedString;
}

//convert to Snake function
const toSnake = function(string) {
  return string.replace(/ /g, "_");
}

//convert to Kebab function
const toKebab = function(string) {
  return string.replace(/ /g, "-");
}

//convert to Title function
const toTitle = function(string) {
  let splitStrings = string.split(" ");
  splitStrings.forEach(function(item, index) {
    splitStrings[index] = item.replace(item[0], item[0].toUpperCase());
  });
  return splitStrings.join(" ");
}

//capitalize vowels function
const toVowel = function(string) {
  return string.toLowerCase().replace(/[aeiou]/g, function(v) {
    return v.toUpperCase();
  })
}

//capitalize consonants function
const toConsonant = function(string) {
  return string.toLowerCase().replace(/[bcdfghjklmnpqrstvwxyz]/g, function(v) {
    return v.toUpperCase();
  })
}


//checks
console.log(makeCase("this is a string", "camel"));
console.log(makeCase("this is a string", "pascal"));
console.log(makeCase("this is a string", "snake"));
console.log(makeCase("this is a string", "kebab"));
console.log(makeCase("this is a string", "title"));
console.log(makeCase("this is a string", "vowel"));
console.log(makeCase("this is a string", "consonant"));
console.log(makeCase("this is a string", ["upper", "snake"]));
