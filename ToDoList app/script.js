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
		inputBox.value = ''
		lucide.createIcons()
	}
}