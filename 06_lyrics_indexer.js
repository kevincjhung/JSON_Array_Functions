
function wordPosition(words) {
  let wordsArray = words.split(" ");
  let wordObj = {};
  
  for(let wordIndex in wordsArray){
    let word = wordsArray[wordIndex];
 
    if(wordObj[word] == undefined){
      wordObj[word] = [];
    }
  }

  for(let wordIndex in wordsArray){
    let word = wordsArray[wordIndex];
 
    wordObj[word].push(parseInt(wordIndex))
  }  

  return wordObj;
}
module.exports = wordPosition

const input = "buy it use it break it fix it trash it change it mail upgrade it"
const output = wordPosition(input)
console.log(output)

// {
//   buy: [ 0 ],
//   it: [ 1,  3,  5, 7, 9, 11, 14 ],
//   use: [ 2 ],
//   break: [ 4 ],
//   fix: [ 6 ],
//   trash: [ 8 ],
//   change: [ 10 ],
//   mail: [ 12 ],
//   upgrade: [ 13 ]
// }