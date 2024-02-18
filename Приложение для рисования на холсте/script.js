'use strict';

window.addEventListener('DOMContentLoaded', () => {
  const canvas = document.querySelector('#canvas'),
        context = canvas.getContext('2d');

        let isDrawing = false,
            lastX = 0,
            lastY = 0;

  // Начать рисование
   const startDrawing = (e) => {
    isDrawing = true;
    [lastX, lastY] = [e.offsetX, e.offsetY];
  }

  // Закончить рисование
    const stopDrawing = (e) => {
      isDrawing = false;
    }

  // Рисование на холсте
    const drawing = (e) => {
      if (!isDrawing) return;
      
      context.beginPath();
      context.moveTo(lastX, lastY);
      context.lineTo(e.offsetX, e.offsetY);
      context.strokeStyle = '#000';
      context.lineWidth = 5;
      context.lineCap = 'round';
      context. lineJoin = 'round';
      context.stroke();
      [lastX, lastY] = [e.offsetX, e.offsetY];
    } 

  //обработчики 
    canvas.addEventListener('mousedown', startDrawing);
    canvas.addEventListener('mouseup', stopDrawing);
    canvas.addEventListener('mouseout', stopDrawing);
    canvas.addEventListener('mousemove', drawing);
});

/*  description

Для рисования на холсте в данном коде используется HTML5 Canvas API. Этот API предоставляет возможность программно создавать растровые изображения на веб-странице. 
*/