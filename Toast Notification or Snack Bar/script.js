const notifBox = document.getElementById('notification-box');
const delay = 5;
function notif(catigory){
	const elem = document.createElement('div');
	const para = document.createElement('p');
	const icon = document.createElement('i');
	elem.classList.add('notif');
	if (catigory == 'suc') {
		para.textContent = 'Successfully'
		icon.dataset.lucide = 'circle-check';
		elem.classList.add('suc');
	}
	if (catigory == 'war') {
		para.textContent = 'Warning'
		icon.dataset.lucide = 'circle-alert';
		elem.classList.add('war');
	}
	if (catigory == 'err') {
		para.textContent = 'Error'
		icon.dataset.lucide = 'circle-x';
		elem.classList.add('err');
	}
	elem.appendChild(icon)
	elem.appendChild(para);
	notifBox.appendChild(elem);
	lucide.createIcons();
	setTimeout(()=> {
		elem.classList.add('fade-out')
		elem.ontransitionend = () => {
			elem.remove();
		}
	}, delay * 1000);
}