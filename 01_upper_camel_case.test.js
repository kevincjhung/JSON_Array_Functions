const assert = require('assert').strict
const upperCamelCase = require('./01_upper_camel_case')

const input = "this is a string"

describe("upperCamelCase", () => {

  it("should return the string in upper camel case", function() {
    const output = upperCamelCase(input)
    assert.strictEqual(output, "ThisIsAString")    
  })

})