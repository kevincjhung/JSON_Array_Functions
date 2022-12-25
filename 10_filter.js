
function filter(array, callback) {
  return array.filter(callback)
}
module.exports = filter


// test that filter works 
// the result should only be numbers greater than 0
const testResult = filter([-1,-2,-5,1,2,5], function(number) {
  return number > 0
})

console.log(testResult)
// [1,2,5]
