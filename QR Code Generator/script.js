const input = document.querySelector('.container > div > input')
const color = document.getElementById('color')
const qrCodeImage = document.querySelector('#qr-code > img');
const QRCodeApi = 'https://api.qrserver.com/v1/create-qr-code/?size=900x900&format=svg&data='

async function generateQrCode() {
	console.log(QRCodeApi + encodeURIComponent(input.value) + '&color=' + color.value.replace('#', ''))
	
	qrCodeImage.src = QRCodeApi + encodeURIComponent(input.value) + '&color=' + color.value.replace('#', '')
	qrCodeImage.parentElement.classList.add('show-img');
}