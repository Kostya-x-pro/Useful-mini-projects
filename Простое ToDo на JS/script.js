'use strict';

const addTask = () => {
  const taskInput = document.querySelector('#input'),
        taskList = document.querySelector('#list'),
        trimedValue = taskInput.value.trim();

  if(trimedValue !== '') {
    const taskItem = document.createElement('li'),
          taskBtnRemove = document.createElement('a');

    taskItem.textContent = trimedValue;
    taskList.append(taskItem)

    taskBtnRemove.textContent = 'Удалить';
    taskItem.append(taskBtnRemove);

    taskItem.addEventListener('click', () => taskList.removeChild(taskItem))
    
    taskInput.value = '';
  }
}

document.querySelector('#addTask').addEventListener('click', addTask);

/*  description:

  Этот пример создает поле ввода и кнопку для добавления задачи. Когда задача добавляется, она отображается в виде элемента списка с кнопкой "Удалить", которая удаляет задачу при клике
*/