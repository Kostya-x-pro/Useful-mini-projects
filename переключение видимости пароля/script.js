const toggleCheckbox = document.querySelector('#toggle');

 togglePasswordVisibility = () => {
  const passwordInput = document.querySelector('#password');

  return toggleCheckbox.checked ? 
         passwordInput.type = "text" : 
        passwordInput.type = "password";
}

toggleCheckbox.addEventListener('click',togglePasswordVisibility)

/* 
  description:

 Этот код создает поле ввода пароля и чекбокс, который при активации переключает видимость пароля. При выборе чекбокса, тип ввода пароля меняется с "password" на "text" и наоборот
*/