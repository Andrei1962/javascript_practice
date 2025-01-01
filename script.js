let oneNamber = +prompt('Введите первое число');
let operator = prompt('Введите действие + , - , * , / ');
let twoNamber = +prompt('Введите второе число');
alert(`Результат вычисления: ${oneNamber} ${operator} ${twoNamber} = ${eval(`${oneNamber} ${operator} ${twoNamber}`)}`)