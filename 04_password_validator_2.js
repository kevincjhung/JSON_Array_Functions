
function validatePasswords(passwords) {
	var re = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z]).{8,}$/;
  let returnArray = [];
  
  for(let password of passwords){
    let isValid = re.test(password);
    if(isValid){
      returnArray.push(password)
    }
  }

  return returnArray;
}

module.exports = validatePasswords

const passwords = [
  'kqkybnvemaig',
  '3ef@3qfd0',
  'h1b6pouv',
  'z36wyvrh!',
  'fg8ms81co#',
  'qp7z5xqcu@ex',
  'vhha42k',
  'ktvbj2um4',
  'i9jcgtr!vko',
  'aon24qz'
]

const validPasswords = validatePasswords(passwords)

