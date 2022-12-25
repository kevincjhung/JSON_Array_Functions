const assert = require('assert').strict
const filter = require('./10_filter')

const input = [{name: "a", year: 2020}, {name: "abc", year: 2020}, {name: "ab", year: 2019}]

describe("filter", () => {

  it("should return the filtered results", function() {
    const output = filter(input, a => a.year === 2020)
    assert.deepStrictEqual(output, [{name: "a", year: 2020}, {name: "abc", year: 2020}])    
  })

})