const createNoteBtn = document.getElementById('create-note-btn');
const notesContainer = document.getElementById('notes-container');
const titleMaxLenght = 30;

createNoteBtn.addEventListener('click', event => {
	const note = document.createElement('div');
	const title = document.createElement('input');
	// const titleP = document.createElement()
	const content = document.createElement('textarea');
	const del = document.createElement('i');
	const date = new Date();

	note.className = 'note'
	title.className = 'note-title'
	title.name = 'title'
	title.maxLength = 36;
	title.value = 'Untitled | ' + Date().split('GMT')[0]
	title.placeholder = 'Title'
	title.oninput = e => {
		SaveChanges();
	}
	title.onfocus = e => {
		title.select();
	}
	content.className = 'note-content'
	content.name = 'note'
	content.placeholder = 'Content'
	content.oninput = e => {
		SaveChanges();
	}
	del.className = 'delete-note-btn'
	del.dataset.lucide = 'trash'
	note.addEventListener('click', e => {
		if (e.target.classList.contains('lucide') || e.target.parentElement.classList.contains('lucide')){
			note.remove();
			SaveChanges();
		}
	})
	note.appendChild(title);
	note.appendChild(content);
	note.appendChild(del);
	notesContainer.insertBefore(note, notesContainer.firstChild)
	lucide.createIcons();
	title.focus();
	SaveChanges();
})


function SaveChanges() {
	console.log(notesContainer.innerHTML);
	localStorage.setItem('note-data', notesContainer.innerHTML);
}

function loadData() {
	const data = localStorage.getItem('note-data');
	notesContainer.innerHTML = data
}


// loadData();