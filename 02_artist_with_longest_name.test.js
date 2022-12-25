const assert = require('assert').strict
const artistWithLongestName = require('./02_artist_with_longest_name')

const input = [{name: "a"}, {name: "abc"}, {name: "ab"}]

describe("artistWithLongestName", () => {

  it("should return the artist with the longest name", function() {
    const output = artistWithLongestName(input)
    assert.deepStrictEqual(output, {name: "abc"})    
  })

})