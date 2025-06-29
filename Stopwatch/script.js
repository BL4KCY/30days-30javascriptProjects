const timeDisplay = document.getElementById('time-display');
const playPauseBtn = document.getElementById('play-pause')
const resetLapBtn = document.getElementById('reset-lap')
const laps = document.getElementById('laps');
let		elapsedTime = null;
let  	startTime = null;
let		onOff = false;
let		lapNo = 1;

function  playPause() {
	if (onOff == false) {
		onOff = true
		changeIcon(playPauseBtn, 'pause');
		changeIcon(resetLapBtn, 'flag');
		startTime = Date.now() - elapsedTime;
		updateDisplay();
	} else {
		onOff = false;
		changeIcon(playPauseBtn, 'play');
		changeIcon(resetLapBtn, 'rotate-ccw');
	}
}

function putLap() {
	const lap = document.createElement('div');
	const ptime = document.createElement('p');
	const pno  = document.createElement('p');
	const i = document.createElement('i');
	lap.classList.add('lap');
	ptime.textContent = timeDisplay.textContent;
	pno.textContent = lapNo++;
	i.dataset.lucide = 'flag-triangle-right';
	pno.appendChild(i);
	lap.appendChild(pno);
	lap.appendChild(ptime);
	laps.appendChild(lap);
	lucide.createIcons();
}

function resetLap() {
	if (onOff) {
		console.log('here');
		
		putLap();
	} else {
		timeDisplay.textContent = '00:00:00:000';
		startTime = null;
		elapsedTime = null;
		lapNo = 1;
		laps.innerHTML = '';
	}
}

function updateDisplay() {
	if (onOff == true) {
		const now = Date.now();
		requestAnimationFrame(updateDisplay);
		elapsedTime = now - startTime;
		timeDisplay.textContent = formatTime(elapsedTime);
	}
}

function changeIcon(parentElem, iconName) {
	const i = document.createElement('i');
	i.dataset.lucide = iconName;
	parentElem.firstElementChild.remove();
	parentElem.appendChild(i);
	lucide.createIcons();
}

function formatTime(time) {
  const hours = Math.floor(time / (1000 * 60 * 60));
  const minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((time % (1000 * 60)) / 1000);
  const mseconds = time % 1000;

  const tm = {
    hours: String(hours).padStart(2, '0'),
    minutes: String(minutes).padStart(2, '0'),
    seconds: String(seconds).padStart(2, '0'),
    mseconds: String(mseconds).padStart(3, '0')
  };
  return `${tm.hours}:${tm.minutes}:${tm.seconds}:${tm.mseconds}`
}
