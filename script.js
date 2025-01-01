let oneNamber = +prompt('Введите первое число');
let operator = prompt('Введите действие + , - , * , / ');
let twoNamber = +prompt('Введите второе число');
let result;
if (operator === '+') {
 result = oneNamber + twoNamber
} else if (operator === '-') {
  result = oneNamber - twoNamber
}else if (operator === '*') {
  result = oneNamber * twoNamber
}else if (operator === '/') {
  result = oneNamber / twoNamber
}
alert(result);

/*alert('Результат вычисления: ${oneNamber} ${operator} ${twoNamber} = ${eval('${oneNamber} ${operator} ${twoNamber}')}')
 
/*alert('Результат ${oneNamber} ${operator} ${twoNamber} = ${eval('${oneNamber} ${operator} ${twoNamber}')}');
alert(oneNamber);/* так выводит */
/*alert('результат ${oneNamber}') /* так не выводит */
