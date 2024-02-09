'use strict';

const getFactorial = (n) => {
  if (n <= 1) {
    return 1
  } else {
    return n * getFactorial(n - 1);
  }
}


function calculateFactorial() {
  const number = +document.querySelector('#number').value;
  const resultDisplay = document.querySelector('#result');

    if (isNaN(number)) {
      resultDisplay.textContent = 'Пожалуйста, введите корректное число.'
    } else {
      resultDisplay.textContent = `Факториал числа ${number} равен ${getFactorial(number)}`
    }
}

document.querySelector('#calculate').addEventListener('click', calculateFactorial)

/* description
  Факториал - это математическое понятие, которое представляет собой произведение всех положительных целых чисел от 1 до данного числа. Например, факториал числа 5 (обозначается как 5!) равен 5 × 4 × 3 × 2 × 1 = 120. 

*/