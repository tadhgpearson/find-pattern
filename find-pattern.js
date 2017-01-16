const findPattern = require("./index.js");
var input = process.argv[2];

if(!input){
	console.log("Find Pattern: Finds the shortest repeating pattern in the input string.");
	console.log("For example: Given toto, the shortest pattern is to.");
	var readline = require('readline-sync');
	input = readline.question("Provide an input to check for patterns:>")
}
 
console.log(input + " -> " +findPattern(input));