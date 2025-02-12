fetch('https://reqres.in/api/users?per_page=12') /* сетевой запрос по адресу */
  .then((response) => {/* метод ответа */
    console.log(response)
    return response.json() /* вормат json */
  })
  .then((result) => {     /* промис выполнен успешно и получает результат*/
    console.log(result)
    const users = result.data
  

  users.forEach(user => {/* {реребирает все элементы массива */
    console.log(user.last_name);
  });
    
  const usersStartWithF = users.filter(user => user.last_name.startsWith('F')) /* выбирает элементы согласно условиям ,  startsWith - проверяет начинается ли строка с F */
    console.log('Данные пользователей с фамилией начинающейся на F ', usersStartWithF);
    
  const usersName = users.reduce((acc, user) => { /*вычисления единого значения на основе всего массива.*/
    return acc + `${user.first_name} ${user.last_name}, ` /* по очере склатывает все элементы иассива */
  }, '') /* '' начальное значение пустая строка */
    
  console.log(`Наша база содержит данные следующих пользователей: ${usersName.slice(0, -2)}`);
    
  const userKeys = Object.keys(users[0]) /* возвращает массив из свойств объекта первого элемента */
  console.log(userKeys);
})
  .catch((erorr) => {
    console.log(erorr); /*выводится при ошибке в промисе */
  })    