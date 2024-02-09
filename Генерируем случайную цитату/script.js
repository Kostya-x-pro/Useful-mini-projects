'use strict';

window.addEventListener('DOMContentLoaded', fetchRandomQuote);
document.querySelector('#genQuote').addEventListener('click', fetchRandomQuote);

async function fetchRandomQuote() {
  const response = await fetch('https://api.quotable.io/random');
  const data = await response.json();
  const quote = `${data.content} - ${data.author}`;

  document.querySelector('#quoteDisplay').textContent = quote
}

/*description:
Эта функция будет отображать случайную цитату при каждом обновлении страницы. В этом коде при каждом нажатии на кнопку "Новая цитата" будет загружаться случайная цитата с использованием открытого API "Quotable" 
*/