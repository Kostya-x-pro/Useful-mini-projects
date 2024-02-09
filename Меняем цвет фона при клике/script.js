'use strict';
document.addEventListener('click', () => {
  const body = document.querySelector('body');
  
  body.style.backgroundColor = `rgb(
    ${getNumRGB()},
    ${getNumRGB()},
    ${getNumRGB()},
    ${Math.random().toFixed(3)}
    )`
    
    function getNumRGB() {
      return Math.floor(Math.random() * 255)
    }
});


/* description

Этот код создает страницу, которая меняет цвет фона при клике или при загрузке страницы. При каждом клике генерируется новый случайный цвет в формате 

*/