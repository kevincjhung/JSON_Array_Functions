const assert = require('assert').strict
const map = require('./11_map')

const input = [{name: "a", year: 2020}, {name: "abc", year: 2020}, {name: "ab", year: 2019}]

describe("map", () => {

  it("should return the maped results", function() {
    const output = map(input, a => a.name)
    assert.deepStrictEqual(output, ["a", "abc", "ab"])    
  })

})