
const calculateChange = function(total, cash) {
	let changeCalculated = {}  
  let change = cash - total;
	if (change / 2000 >= 1) {
  	let amountOfTwenties = Math.floor(change / 2000)
    change = change - 2000 * amountOfTwenties;
  	changeCalculated.twentyDollars = amountOfTwenties;
  }
  if (change / 1000 >= 1) {
  	let amountOfTens = Math.floor(change / 1000)
    change = change - 1000 * amountOfTens;
  	changeCalculated.tenDollars = amountOfTens;
  }
  if (change / 500 >= 1) {
  	let amountOfFives = Math.floor(change / 500)
    change = change - 500 * amountOfFives;
  	changeCalculated.fiveDollars = amountOfFives;
  }
  if (change / 200 >= 1) {
  	let amountOfTwos = Math.floor(change / 200)
    change = change - 200 * amountOfTwos;
  	changeCalculated.twoDollars = amountOfTwos;
  }
  if (change / 100 >= 1) {
  	let amountOfOnes = Math.floor(change / 100)
    change = change - 100 * amountOfOnes;
  	changeCalculated.oneDollars = amountOfOnes;
  }
   if (change / 25 >= 1) {
  	let amountOfQuarters = Math.floor(change / 25)
    change = change - 25 * amountOfQuarters;
  	changeCalculated.quarters = amountOfQuarters;
  }
   if (change / 10 >= 1) {
  	let amountOfDimes = Math.floor(change / 10)
    change = change - 10 * amountOfDimes;
  	changeCalculated.dimes = amountOfDimes;
  }
   if (change / 5 >= 1) {
  	let amountOfNickels = Math.floor(change / 5)
    change = change - 5 * amountOfNickels;
  	changeCalculated.nickels = amountOfNickels;
  }
   if (change / 1 >= 1) {
  	let amountOfPennies = Math.floor(change / 1)
    change = change - 1 * amountOfPennies;
  	changeCalculated.pennies = amountOfPennies;
  } 
   return changeCalculated;
};

console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));