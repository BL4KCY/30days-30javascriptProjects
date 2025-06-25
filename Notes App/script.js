const createNoteBtn = document.getElementById('create-note-btn');
const notesContainer = document.getElementById('notes-container');
const titleMaxLenght = 30;
console.log(notesContainer);


createNoteBtn.addEventListener('click', event => {
	const note = document.createElement('div');
	const title = document.createElement('h3');
	const content = document.createElement('textarea');
	const del = document.createElement('i');
	const date = new Date();

	note.className = 'note'
	title.className = 'note-title'
	content.className = 'note-content'
	del.className = 'delete-note-btn'

	title.textContent = 'untitled | ' + Date().split('GMT')[0]
	title.setAttribute('contenteditable', 'true')
	del.dataset.lucide = 'trash'
	title.addEventListener('input', e => {
		// here need to fix max length title 
		// and prevent the newline 
	})
	note.addEventListener('click', e => {
		if (e.target.classList.contains('lucide') || e.target.parentElement.classList.contains('lucide')){
			note.remove();
		}
	})
	
	note.appendChild(title);
	note.appendChild(content);
	note.appendChild(del);
	notesContainer.appendChild(note);
	lucide.createIcons();
})