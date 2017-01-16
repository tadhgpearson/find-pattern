module.exports = findPattern;

/* Checks for the pattern that exists in the input - including patterns that may be cut short by a terminator.
   Returns true if the provided pattern is the smallest pattern. Otherwise, returns false */
function isPattern(pattern, input){
	if(pattern == input){
		return true;
	}
	/* Check to see if the input starts with the pattern and contains further patterns */
	else if(input.startsWith(pattern) 
		&& isPattern(pattern, input.substring(pattern.length))){
			return true;
	}
	/* Checks to see if the pattern would have existed in the input, but has been terminated prematurely, but checking 
	   if the input starts with the pattern */
	else if(pattern.startsWith(input)){
		return true;
	}
	else{
		return false;
	}
}

/* Finds the smallest recurring pattern that may exist in the input, based on the rules of isPattern above.
   The input is always considered to be a pattern of itself */
function findPattern(input){
	if(input.length == 0){
		return input;
	}
	else{
		for(var i=0; i < input.length; i++){
			var pattern = input.substring(0, i+1);
			if(isPattern(pattern, input)){
				return pattern;
			}
		}
		throw "There is no pattern in the input";
	}
}

var input = process.argv[2];

if(!input){
	console.log("Find Pattern: Finds the shortest repeating pattern in the input string.");
	console.log("For example: Given toto, the shortest pattern is to.");
	var readline = require('readline-sync');
	input = readline.question("Provide an input to check for patterns:>")
}
 
console.log(input + " -> " +findPattern(input));