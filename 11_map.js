
function map(array, callback) {
  let returnArray = [];
  
  for(index in array){
   returnArray.push(callback(array[index]))
  }
  return returnArray
}
module.exports = map


// test that map works 
// the result should return each number doubled
const testResult = map([1,2,3,4,5], function(number) {
  return number*2
})

console.log(testResult)
// [2,4,6,8,10]
