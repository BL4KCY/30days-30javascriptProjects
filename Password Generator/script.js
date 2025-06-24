const	passwordBox = document.getElementById('password');
const length = 12;



function createPassword() {
	let password = '';
	const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	const lowerCase = "abcdefghijklmnopqrstuvwxyz";
	const numbers = "0123456789";
	const spicialChars = "!@#$%^&*()-_=+[]{}|;:\'\",.<>?/`~\\";
	const allChars = upperCase + lowerCase + numbers + spicialChars;
	
	password += upperCase[Math.floor(Math.random() * upperCase.length)]
	password += lowerCase[Math.floor(Math.random() * lowerCase.length)]
	password += numbers[Math.floor(Math.random() * numbers.length)]
	password += spicialChars[Math.floor(Math.random() * spicialChars.length)]
	
	while (password.length < length) {
		password += allChars[Math.floor(Math.random() * allChars.length)]
	}
	passwordBox.value = password;
}


function copyPassword() {
	passwordBox.select();
	document.execCommand('copy');
}

