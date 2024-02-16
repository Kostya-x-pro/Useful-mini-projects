'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const generatorQR = () => {
    const qrText = document.querySelector('#qr_text').value,
          qrCode = document.querySelector('#qr_code');

          qrCode.innerHTML = `<img src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${qrText}" alt="QR Code">`;

          document.querySelector('#qr_text').value = '';

  }

  document.querySelector('#generateCode').addEventListener('click', generatorQR)
});

/* description :
Этот код использует встроенный API https://api.qrserver.com для генерации QR-кода на лету. Он сохраняет простоту и убирает необходимость в сторонних библиотеках.
*/