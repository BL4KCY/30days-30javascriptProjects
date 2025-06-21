const question = document.querySelector(".quiz-app > h2");
const answers = document.querySelector('.answers');
const check = document.querySelector('.check-btn');
const next = document.querySelector('.next-btn');
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

	check.addEventListener('click', (e) => {
		const selectedButton = 	answers.querySelector('[is-selected="true"]');
											//----------------------index of the correct element------------------------//
		const corretButon = answers.children[questionData[index].answers.findIndex(answer  => answer.correct === "true")];
		console.log(selectedButton, corretButon);
		
		selectedButton.style.background = 'red'
		corretButon.style.background = 'green'
		selectedButton.style.color = 'white'
		corretButon.style.color = 'white'
	})
	
	next.addEventListener('click', e => {
		if ((index + 1) == questionData.length) {
			resaultPage()
		} else {
			questionsListApply(++index);
		}
	})

	function isCorrectAnswer(answerBtn) {
		let quesIndex = Array.from(answers.children).indexOf(answerBtn);
		return (questionData[index].answers[quesIndex].correct == 'true') ? true : false;
	}
}


startTheApp()

