'use strict'
  // Получаем элементы с страницы
const generateColor = document.querySelector('#generateColor'),
      colorDisplay = document.querySelector('#colorDisplay'),
      colorCode = document.querySelector('.color_code');

  // Функция генерирующая хекс код цвета  
const getRandomColor = () => {
  const leters = '0123456789ABCDEF';
  let color = '#';

  for (let i = 0; i < 6; i++) {
    color += leters[Math.floor(Math.random() * leters.length)];
  }

  return color;
}

generateColor.addEventListener('click', () => {
  colorDisplay.style.backgroundColor = getRandomColor();
  colorCode.value = `You hex code: ${getRandomColor()}`;
});

/* description:

Генератор цветов на JavaScript: код, который меняет цвет фона элемента при каждом клике. Просто запустите функцию changeColor(), и она создаст случайный цвет в формате HEX.

*/