let money = +prompt('Ваш основной доход за месяц?');
let totalAmount = null;
let additionallncome = null;
let islncome = confirm('Есть ли у вас дополнительный доход?');
if (islncome == true) {
  additionallncome = +prompt('Какая сумма дополнительного дохода?');  
  totalAmount = money + additionallncome;
} else if (islncome == false) {
  totalAmount = money;
}
console.log(totalAmount,additionallncome,islncome);
if(totalAmount > 120000) {
  alert('У вас высокий уроверь дохода',totalAmount)
} else if (totalAmount > 40000 && totalAmount <= 120000) {
  alert('У вас средний уровень дохода',totalAmount);
} else if (totalAmount <= 40000 && totalAmount > 0) {
  alert('К сожалению , у вас уровень дохода ниже среднего',totalAmount);
} else if(totalAmount < 0) {
  alert('Что то пошло не так',totalAmount);
}



