'use strict';

document.addEventListener('mousedown', (e) => e.preventDefault());

document.addEventListener('click', (e) => {
  const elem = document.createElement('div');
  elem.className = 'parcticle';

  Object.assign(elem.style, {left: `${e.clientX}px`, top: `${e.clientY}px`});
  document.body.append(elem);

  setTimeout(() => elem.remove(), 1000);
})

/*  description
В этом примере каждый раз, когда пользователь кликает по странице, создается и анимируется новая частица. Можете изменять цвет, размер и другие свойства частиц по своему усмотрению. 
*/
