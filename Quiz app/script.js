const question = document.querySelector(".quiz-app > h2");
const answers = document.querySelector('.answers');
const check = document.querySelector('.check-btn');
const next = document.querySelector('.next-btn');
const replay = document.querySelector('.play-again');
const resualt = document.querySelector('.resault');
let	index = 0;
let	score = 0;
async function startTheApp() {
	let questionData;
	
	await fetch('data.json').then(response => response.json()).then( data => {
		questionData = data;
	})
	
	function questionsListApply(index = 0) {
		answers.innerHTML = '';
		question.textContent = questionData[index].question;
		question.setAttribute('no', index + 1)
		questionData[index].answers.forEach(dataAnswer => {
			let answer = document.createElement('button')
			answer.className = 'answer-btn';
			answer.textContent = dataAnswer.answer;
			// answer.dataset.correct = dataAnswer.correct;
			answers.appendChild(answer)
		});
		answers.querySelectorAll('.answer-btn').forEach(btn => {
			btn.addEventListener('click', (e) => {
				answers.querySelectorAll('.answer-btn').forEach(btn => {
					btn.setAttribute('is-selected', 'false');
				})
				btn.setAttribute('is-selected', 'true')
			})
		})
	}
	questionsListApply();

	function getSelectedAndCorrectButton() {
		console.log(answers);
		
		return  {
			selected: answers.querySelector('[is-selected="true"]'),
			correct: answers.children[questionData[index].answers.findIndex(answer  => answer.correct === "true")]
		}
	}
	check.addEventListener('click', (e) => {
		const	button = getSelectedAndCorrectButton();
		{
			if (button.selected) {
				button.selected.style.background = 'red'
				button.selected.style.color = 'white'
			}
			button.correct.style.background = 'green'
			button.correct.style.color = 'white'
		}
	})
	
	next.addEventListener('click', e => {
		const button = getSelectedAndCorrectButton();
		if (button.correct == button.selected) {
			score++;
			console.log(score);
		}
		if ((index + 1) == questionData.length) {
			resaultPage();
		} else {
			questionsListApply(++index);
		}
	})

	replay.addEventListener('click', e => {
		index = 0;
		score = 0;
		resualt.style.display = replay.style.display = 'none';
		answers.style.display = next.style.display = check.style.display = 'flex';
		questionsListApply()
	})

	function resaultPage() {
		question.textContent = 'Resault';
		resualt.querySelector('h3').textContent = 'Score: ' + score + ' out of ' + questionData.length;
		resualt.style.display = replay.style.display = 'block';
		answers.style.display = next.style.display = check.style.display = 'none';
	}
}


startTheApp()

