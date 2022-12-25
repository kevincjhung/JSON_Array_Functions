const assert = require('assert').strict
const passwordIsValid = require('./03_password_validator')

// const allPasswords = [ 'tlk9g!', '#llivnsd', 'ax3jd0', 'nqeskbke13cy#', '3l9kr@ia3n', 'qlie#vs8!j', '1cikmdrfcq', 'tpdirp', 'hdc!995a', 'rjyom6mrn' ]
const valid = [ 'nqeskbke13cy#', '3l9kr@ia3n', 'qlie#vs8!j', 'hdc!995a' ]
const invalid = [ 'tlk9g!', '#llivnsd', 'ax3jd0', '1cikmdrfcq', 'tpdirp', 'rjyom6mrn' ]

const assertPasswordIsValid = password => assert.strictEqual(passwordIsValid(password), true)
const assertPasswordIsInvalid = password => assert.strictEqual(passwordIsValid(password), false)

describe("passwordIsValid", () => {

  it("should return true when a password is valid", function() {
    valid.forEach(assertPasswordIsValid)
  })

  it("should return false when a password is invalid", function() {
    invalid.forEach(assertPasswordIsInvalid)
  })

})