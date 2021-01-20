const urlDecode = function(text) {
	let removePercent20 = text.replace(/%20/g, " "); //replace "%20" with " "
	let removeAnd = removePercent20.replace(/&/g, "="); //replace "&"" with "="
  let splitText = removeAnd.split("=");//split string at "=" to create a new array
 	let decodedObj = {} 
  let keyArray = []; 
  let valueArray = [];
  //iterate over array and push keys and values to their own seperate arrays
  for (let i = 0; i < splitText.length; i++) {
  	if (i % 2 === 0) {
    	keyArray.push(splitText[i]);
    } else {
    	valueArray.push(splitText[i])
    }
  }
  //iterate over key array and assign they keys and values to decodedObj
  for (let i = 0; i < keyArray.length; i++) {
  	decodedObj[keyArray[i]] = valueArray[i];
  } return decodedObj;
};

//checks
console.log(urlDecode("duck=rubber"));
console.log(urlDecode("bootcamp=Lighthouse%20Labs"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain").weather);
