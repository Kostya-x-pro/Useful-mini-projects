'use strict';

document.querySelector('.cut').addEventListener('click', () => {
  const text = document.querySelector('.content').value;
  navigator.clipboard.writeText(text)
    .then(() => {
      document.querySelector('.content').value = '';
    })
})

/* description
Задача этого приложения простая — вырезать текст из какого-то блока нажатием кнопки. Довольно таки удобно, вместо выделения и копирования просто нажать одну кнопку и нужный текст уже в буфере обмена.
*/