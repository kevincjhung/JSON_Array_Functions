const assert = require('assert').strict
const countWords = require('./05_lyrics_counter')

const words = "a a b c"
const expectedResult = {
  a: 2,
  b: 1,
  c: 1
}

describe("validatePasswords", () => {

  it("should return only the valid passwords", function() {
    const result = countWords(words)
    assert.deepStrictEqual(result, expectedResult)
  })

})