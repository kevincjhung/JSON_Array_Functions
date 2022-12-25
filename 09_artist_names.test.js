const assert = require('assert').strict
const artistNames = require('./09_artist_names')

const input = [{name: "a"}, {name: "abc"}, {name: "ab"}]

describe("artistNames", () => {

  it("should return the artists names", function() {
    const output = artistNames(input)
    assert.deepStrictEqual(output, ["a", "abc", "ab"])    
  })

})