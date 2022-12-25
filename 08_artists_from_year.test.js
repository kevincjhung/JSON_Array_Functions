const assert = require('assert').strict
const artistsFromYear = require('./08_artists_from_year')

const input = [{name: "a", year: 2020}, {name: "abc", year: 2020}, {name: "ab", year: 2019}]

describe("artistsFromYear", () => {

  it("should return the artists from 2020", function() {
    const output = artistsFromYear(input, "2020")
    assert.deepStrictEqual(output, [{name: "a", year: 2020}, {name: "abc", year: 2020}])    
  })

})