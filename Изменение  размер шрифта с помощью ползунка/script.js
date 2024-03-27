'use strict';

const fontSlider = document.querySelector('#fontSlider'),
      output = document.querySelector('#output'),
      changeText = document.querySelector('#changeText');

fontSlider.addEventListener('input', (e) => {
  const fontSize = e.currentTarget.value;
  
  output.textContent = `Разммер шрифта: ${fontSize}px`;
  changeText.style.fontSize = `${fontSize}px`; 
})

/* description :
Этот код автоматически обновляется при перемещении ползунка, и текст на странице меняется в соответствии с выбранным размером шрифта.
*/