'use strict';
const counterElem = document.querySelector('#counter');
let counter = 0;
counterElem.textContent = counter;
      
const changeCounter = () => {
  counterElem.textContent = ++counter
}

counterElem.addEventListener('click', changeCounter);

/*  description
Простой интерактивный счетчик, который увеличивается при каждом клике пользователя. Когда пользователь наводит на элемент, его цвет меняется, чтобы указать на возможность взаимодействия.
*/