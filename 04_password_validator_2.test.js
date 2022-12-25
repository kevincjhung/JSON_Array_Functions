const assert = require('assert').strict
const validatePasswords = require('./04_password_validator_2')

const allPasswords = [ 'tlk9g!', '#llivnsd', 'ax3jd0', 'nqeskbke13cy#', '3l9kr@ia3n', 'qlie#vs8!j', '1cikmdrfcq', 'tpdirp', 'hdc!995a', 'rjyom6mrn' ]
const valid = [ 'nqeskbke13cy#', '3l9kr@ia3n', 'qlie#vs8!j', 'hdc!995a' ]
// const invalid = [ 'tlk9g!', '#llivnsd', 'ax3jd0', '1cikmdrfcq', 'tpdirp', 'rjyom6mrn' ]

describe("validatePasswords", () => {

  it("should return only the valid passwords", function() {
    const result = validatePasswords(allPasswords)
    assert.deepStrictEqual(result, valid)
  })

})