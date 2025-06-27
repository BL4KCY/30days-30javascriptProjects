const QuoteApiURL = 'https://api.api-ninjas.com/v1/quotes'
const QuoteApiKey = 'sucP+CHclvdJ01ySUbg6gA==6pbVPDFsKt9aGcFz'
const blockQuote = document.querySelector('.quote-card > blockquote');
const author = document.querySelector('.quote-card > span');


async function randomQuote(params) {
	const response = await fetch(QuoteApiURL, {
		method: 'GET',
		headers: {
			'X-Api-Key': QuoteApiKey
		}
	})
	if (response.status == 404) {
		alert("Sorry Api problem please try later!");
	} else {
		const data = await response.json()
		blockQuote.textContent = data[0].quote;
		author.textContent = data[0].author;
	}	
}

function shareX() {
	const content = encodeURIComponent("\"" + blockQuote.textContent + "\"" + '\n\n--' + author.textContent + ' 🖊️');
	const url = 'https://x.com/intent/post?text=' + content
	window.open(url, 'Tweet Window', "width=600, height=300");
}

randomQuote();