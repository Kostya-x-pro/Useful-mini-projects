'use strict';

const addExpense = () => {
  const name = document.querySelector('#expenseName').value,
        amountText = document.querySelector('#expenseAmount'),
        amount = parseFloat(amountText.value);

  function changeElemStyle(elem, color, holder) {
    elem.value = '';
    elem.style.borderColor = color;
    elem.placeholder = holder;
  }

        if (isNaN(amount) || amount <= 0) {
          changeElemStyle(amountText, 'red', 'Please enter a valid amount.')
          return
        }

  const totalExpensesElement = document.querySelector('#totalExpenses'),
        totalExpenses = parseFloat(totalExpensesElement.textContent);
        totalExpensesElement.textContent = (totalExpenses + amount).toFixed(2);
        const listItem = document.createElement('li');
        listItem.textContent = `${name}: $${amount.toFixed(2)}`;

        document.querySelector('#expenseList').append(listItem);
        document.querySelector('#expenseName').value = '';
        changeElemStyle(amountText, '', 'Amount in USD')
}

document.querySelector('#calcExpense').addEventListener('click', () => {
  addExpense();
})

document.querySelector('#calcExpense').addEventListener('keydown', (e) => {
  if (e.key === 'enter') addExpense()
})

/* description
Это простое приложение для отслеживания расходов, которое позволяет пользователям добавлять название расхода и его сумму, а затем отображает общую сумму расходов.
*/