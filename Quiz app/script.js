const question = document.querySelector(".quiz-app > h2");
const answers = document.querySelector('.answers');
const next = document.querySelector('next-btn');
async function startTheApp() {
	let questionData;
	
	await fetch('data.json').then(response => response.json()).then( data => {
		questionData = data;
	})
	question.textContent = questionData.question;
	questionData.answers.forEach(dataAnswer => {
		let answer = document.createElement('button')
		answer.className = 'answer-btn';
		answer.textContent = dataAnswer.answer;
		answer.dataset.correct = dataAnswer.correct;
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

startTheApp()


