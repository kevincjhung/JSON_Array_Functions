
function upperCamelCase(text) {
  	/*
  	split by space
	create a new empty string
	loop through each word 
	make first char upperCase
	append it to a new string "newString"
	return newString
  	*/
	let leText = text.split(" ");
	let returnText = "";
	
	for(let wordIndex = 0; wordIndex < leText.length; wordIndex++){
		let curWord = leText[wordIndex]; // get current word
		let firstChar = curWord.charAt();	// isolate first char
		let restOfWord = curWord.slice(1); // get rest of word
		
		curWord = firstChar.toUpperCase() + restOfWord; // add capitalized char to rest of word

		returnText += curWord; // add capitalized word to the string we will return
	}
	return returnText; // return the string
}
module.exports = upperCamelCase

// from https://api.kanye.rest/
const input = "fur pillows are hard to actually sleep on"

const output = upperCamelCase(input)

console.log(output)
// FurPillowsAreHardToActuallySleepOn