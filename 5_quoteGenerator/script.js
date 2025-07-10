const quote = document.getElementById("quote") ;
const author = document.getElementById("author") ;

const api_url = "https://api.freeapi.app/api/v1/public/quotes";

async function getquote(url) {
  const response = await fetch(url);
  const data = await response.json();
  const quotesArray = data.data.data;

  const randomIndex = Math.floor(Math.random() * quotesArray.length);
  const randomQuote = quotesArray[randomIndex];

  console.log(`"${randomQuote.content}"— ${randomQuote.author}`);
  quote.innerHTML = randomQuote.content; 
  author.innerHTML = randomQuote.author ;
}

getquote(api_url);
