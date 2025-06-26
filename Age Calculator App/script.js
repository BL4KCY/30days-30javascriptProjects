const calcBtn = document.querySelector('.user-input > button');
const dateInput = document.querySelector('.user-input > input');
const resultElems = document.querySelectorAll('#resault > span');

function calculateAge() {
	const currentDate = {
		year: new Date().toISOString().split('-').at(0),
		mounth: new Date().toISOString().split('-').at(1),
		day: new Date().toISOString().split('-').at(2).slice(0, 2)
	}
	const birthDate = {
		year: new Date(dateInput.value).toISOString().split('-').at(0),
		mounth: new Date(dateInput.value).toISOString().split('-').at(1),
		day: new Date(dateInput.value).toISOString().split('-').at(2).slice(0, 2)
	}
	const ageDate = {
		year: currentDate.year - birthDate.year,
		mounth: currentDate.mounth - birthDate.mounth,
		day: currentDate.day - birthDate.day
	}
	if (ageDate.day < 0) {
		ageDate.mounth--;
		const prevMonth = currentDate.mounth === 1 ? 12: currentDate.mounth - 1;
		const prevYear = currentDate.mounth === 1 ? currentDate.year - 1: currentDate.year;		
		ageDate.day += new Date(prevYear, prevMonth, 0).getDate();
	}
	if (ageDate.mounth < 0) {
		ageDate.year--;
		ageDate.mounth += 12;
	}
	resultElems[0].textContent = ageDate.year;
	resultElems[1].textContent = ageDate.mounth;
	resultElems[2].textContent = ageDate.day;
	resultElems[0].parentElement.style.display = 'block';
}