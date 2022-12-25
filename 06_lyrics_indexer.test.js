const assert = require('assert').strict
const countWords = require('./06_lyrics_indexer')

const words = "a a b c"
const expectedResult = {
  a: [0, 1],
  b: [2],
  c: [3]
}

describe("index words", () => {

  it("should give back  ", function() {
    const result = countWords(words)
    assert.deepStrictEqual(result, expectedResult)
  })

})