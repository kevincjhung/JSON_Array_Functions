const assert = require('assert').strict
const artistsByYear = require('./07_artists_by_year')

const input = [{year: 1}, {year: 1}, {year: 2}]
const expectedOutput = {
  1: [
    {year: 1}, {year: 1}
  ],
  2: [
    {year: 2}
  ]
}

describe("artistsByYear", () => {

  it("should return the artist grouped by year", function() {
    const output = artistsByYear(input)
    assert.deepStrictEqual(output, expectedOutput)    
  })

})