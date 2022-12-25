function countWords(words) {
	let wordsArray = words.split(" "); // split string into array of words, by space
	let wordObject = {};			// store # of times a word appears
  
	for(w in wordsArray){
		let curWord = wordsArray[w]; // current word
		 
		if( !wordObject.hasOwnProperty(curWord) ){ 	// if current word does not exist in object
			wordObject[curWord] = 1;				// set word count to 1
		} else {									// word already exists
			wordObject[curWord]++;					// increment by 1
	  	}  
	}
	return wordObject;	
}

module.exports = countWords

const input = "buy it use it break it fix it trash it change it mail upgrade it"
const output = countWords(input)
console.log(output)

// {
//   buy: 1,
//   it: 7,
//   use: 1,
//   break: 1,
//   fix: 1,
//   trash: 1,
//   change: 1,
//   mail: 1,
//   upgrade: 1
// }