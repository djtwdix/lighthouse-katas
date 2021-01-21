const squareCode = function(message) {
  let noSpace = message.replace(/ /g, "");
  let square = Math.ceil(Math.sqrt(noSpace.length));
  let tempArray = [];
  let codedMessage = [];
  let counter = 0;
  //outer loop limits amount of arrays (columns) to squareroot of total characters
  for (let i = 0; i < square; i++) {
  	//inner loop limited to size of input noSpace, adds square number to iterator every time through, pushes noSpace[j] character to temporary array
  	for (let j = 0 + counter; j < noSpace.length; j += square) {
    	tempArray.push(noSpace[j])
    }
    //add one to inner loop iterator start to jump to next nested array
    counter++
    //join tempArrays and push them to codedMessage array;
    codedMessage.push(tempArray.join(""))
    //reset tempArray for next loop through
    tempArray = [];
    
  }
  	// return codedMessage array joined with spaces
  	return codedMessage.join(" ");
  
};

//checks
console.log(squareCode("chill out"));
console.log(squareCode("feed the dog"));
console.log(squareCode("have a nice day"));
console.log(squareCode("if man was meant to stay on the ground god would have given us roots"));