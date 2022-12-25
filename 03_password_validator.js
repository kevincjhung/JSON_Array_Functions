
function passwordIsValid(password) {
	var re = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z]).{8,}$/;
    return re.test(password);
	
}

module.exports = passwordIsValid

console.log(passwordIsValid('kqkybnvemaig')) // false
console.log(passwordIsValid('3ef@3qfd0')) // true
console.log(passwordIsValid('password1')) // false
console.log(passwordIsValid('qp7z5xqcu@ex')) // true