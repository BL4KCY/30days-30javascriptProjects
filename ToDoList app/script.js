const	inputBox = document.querySelector('#input-box')
const	ListContainer = document.querySelector('#list-container')


function addTask() {
	const	li = document.createElement('li');
	if (inputBox.value == '') {
		alert('You must write something!');
	} else {
		let	deleteIconX = document.createElement('i')
		deleteIconX.dataset.lucide = 'x'
		li.textContent = inputBox.value;
		li.appendChild(deleteIconX);
		ListContainer.appendChild(li)
		lucide.createIcons()
	}
	inputBox.value = ''
	saveData();
}

ListContainer.addEventListener('click', (e) => {
	if (e.target.tagName.toLowerCase() === 'li') {
		e.target.classList.toggle('checked');
		saveData()
	}
	console.log(e.target.tagName.toLowerCase());
	if (e.target.tagName.toLowerCase() === 'svg') {
		e.target.parentElement.remove();
		saveData()
	}
})


function saveData() {
	localStorage.setItem('data', ListContainer.innerHTML);
}

function loadData() {
	ListContainer.innerHTML = localStorage.getItem('data')
}

loadData();