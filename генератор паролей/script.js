"use strict"

const generateRndPassword = () => {
  const length = 12;
  const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+";

  let password = '';
  
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);

    password += charset[randomIndex];
  }
  return document.querySelector('#password').value = password;
}

document.querySelector('button').addEventListener('click', generateRndPassword);

/* 
  description:

  Этот пример создает простой генератор паролей, который при нажатии кнопки, генерирует случайный пароль длиной 12 символов из указанных в charset.  Вы можете настроить параметры генерации, добавив или убрав символы, а также изменяя длину пароля
*/