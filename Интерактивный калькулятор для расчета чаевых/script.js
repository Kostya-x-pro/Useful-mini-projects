'use strict'

const calculateTip = () => {
  let billAmount = parseFloat(document.querySelector('#billAmount').value),
      tipPercentage = parseFloat(document.querySelector('#tipPercentage').value),
      tipAmount = billAmount * tipPercentage / 100;

  document.querySelector('#tipAmount').textContent = `Tip: $ ${tipAmount.toFixed(2)}`
}

document.querySelector('#result').addEventListener('click', calculateTip)

/*description:
Этот калькулятор прост в использовании и мал в размере кода. Пользователь вводит общую сумму счета и процент чаевых, а затем калькулятор рассчитывает сумму чаевых. 
*/