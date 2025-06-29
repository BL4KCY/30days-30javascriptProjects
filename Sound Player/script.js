const range = document.getElementById('range-control');
const audio = document.getElementById('audio');
const audioAfter = window.getComputedStyle(audio, '::after');
const ppb = document.getElementById('ppb');
const soundIMG = document.getElementById('sound-img');
range.oninput = e => {
  audio.currentTime = range.value;
}

function progress() {
  const val = (range.value - range.min) / (range.max - range.min) * 100;
  range.style.background = `linear-gradient(to right,rgb(187, 33, 243) ${val}%, #ddd ${val}%`;
  const sec = Math.floor(audio.currentTime % 60);
  const min = Math.floor(audio.currentTime / 60);
  const maxSec = Math.floor(audio.duration % 60)
  const maxMin = Math.floor(audio.duration / 60);
  range.style.setProperty('--after-content', `"${maxMin}:${maxSec}"`)
  range.style.setProperty('--before-content', `"${min}:${String(sec).padStart(2, '0')}"`)
}
audio.onloadeddata = updateRange();
function updateRange() {
  range.value = audio.currentTime;
  range.max = audio.duration;
  progress();
}
  function pausePlaySound() {
    const i =  document.createElement('i');
    if (ppb.firstElementChild.classList.contains('lucide-play')) {
      i.dataset.lucide = 'pause'
      ppb.firstElementChild.remove();
      ppb.appendChild(i);
      audio.play();
      soundIMG.style.animationPlayState = 'running'
    } else {      
      i.dataset.lucide = 'play'
      ppb.firstElementChild.remove();
      ppb.appendChild(i);
      audio.pause();
      soundIMG.style.animationPlayState = 'paused'
    }
    lucide.createIcons();
  }
  
  setInterval(updateRange, 1);
	progress();