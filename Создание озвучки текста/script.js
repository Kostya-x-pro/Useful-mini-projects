'use strict';

const button = document.querySelector('button'),
      text = document.querySelector('.text');

button.addEventListener('click', () => {
  const utterance = new SpeechSynthesisUtterance(text.textContent);

  speechSynthesis.speak(utterance);

});


/* description
SpeechSynthesis - это интерфейс Web Speech API, который используется для перевода текста в речь. Он содержит содержимое, которое должен прочитать речевой сервис, и информацию о том, как его читать.
*/
