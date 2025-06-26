const calcBtn = document.querySelector('.user-input > button');
const dateInput = document.querySelector('.user-input > input');



function calculateAge() {
	const birthDate = new Date(dateInput.value);
	console.log(birthDate);
}