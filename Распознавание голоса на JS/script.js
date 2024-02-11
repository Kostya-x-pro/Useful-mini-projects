'use strict';

const recordButton = document.querySelector('#startRecognitionButton'),
      transcription = document.querySelector('#transcription');

recordButton.addEventListener('click', () => {
  const recognition = new webkitSpeechRecognition();
  recognition.lang = 'ru-RU';

  recognition.onresult = (e) => {
    const transcript = e.results[0][0].transcript;
    transcription.textContent = transcript;
  };

  recognition.onerror = (e) => {
    console.error("Ошибка распознавания:", e.error);
  }

  recognition.start()
});

