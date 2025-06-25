const createNoteBtn = document.getElementById('create-note-btn');
const notesContainer = document.getElementById('notes-container');
const titleMaxLenght = 30;

createNoteBtn.addEventListener('click', event => {
	const note = document.createElement('div');
	const title = document.createElement('input');
	const content = document.createElement('textarea');
	const del = document.createElement('i');
	const date = new Date();

	note.className = 'note'
	title.className = 'note-title'
	title.name = 'title'
	title.maxLength = 36;
	title.value = 'Untitled | ' + Date().split('GMT')[0]
	title.placeholder = 'Title'
	title.setAttribute('oninput', 'SaveChanges();');
	title.setAttribute('onfocus', 'select()');
	content.className = 'note-content'
	content.name = 'note'
	content.placeholder = 'Content'
	content.setAttribute('oninput', 'SaveChanges()');
	del.className = 'delete-note-btn'
	del.dataset.lucide = 'trash'
	note.setAttribute('onclick', 'deleteNoteBtn(event)')
	note.appendChild(title);
	note.appendChild(content);
	note.appendChild(del);
	notesContainer.insertBefore(note, notesContainer.firstChild)
	lucide.createIcons();
	title.focus();
	SaveChanges();
})

function deleteNoteBtn(e) {
	if (e.target.classList.contains('lucide')) {
		e.target.parentElement.remove()
	}
	if (e.target.parentElement.classList.contains('lucide')) {
		e.target.parentElement.parentElement.remove()
	}
	SaveChanges();
}

function SaveChanges() {
	const values = {}
	document.querySelectorAll('.note').forEach((el, i) => {
		let elData = {
			title: el.querySelector('.note-title').value,
			content: el.querySelector('.note-content').value
		}
		values[i] = elData;
	})
	localStorage.setItem('note-data', JSON.stringify(values));
	localStorage.setItem('note-html', notesContainer.innerHTML);
}

function loadData() {
	const data = JSON.parse(localStorage.getItem('note-data'));
	console.log(data);
	
	const html = localStorage.getItem('note-html');
	notesContainer.innerHTML = html;
	notesContainer.querySelectorAll('.note').forEach((el, i) => {
		el.querySelector('.note-title').value = data[i].title;
		el.querySelector('.note-content').value = data[i].content;
	})
}

loadData();