function guessGame() {
  const guessnamber = 49

  function gameBot() {
    let userInput = prompt('Угадай число от 1 до 100')
    
    if (userInput === null) {                        /* проверка на нажатие клавиши Отмена */
      alert('Игра окончена')
      return
    }

    const userGuess = Number(userInput)

    if (isNaN(userGuess) || userGuess =='') {      /* проверка на не число и пустую строку */
      alert('Вы ввели не числовое значение, Введите число от 1 до 100')
      return gameBot()
    }
    
    if (userGuess < guessnamber) {
      alert('Загаданное число больше, введите новое число от 1 до 100')
      return gameBot()
    } else if (userGuess > guessnamber) {
      alert('Загаданное число меньше, введите новое число от 1 до 100')
      return gameBot()
    } else (userGuess === guessnamber)
      alert('Поздравляю вы угадали!!!')
    if (confirm('Хотите сыграть снова?')) {
      return gameBot()
    } else {
      alert('Игра закончена, Спасибо за игру')
      return
    }
  }
  return gameBot()
}
guessGame()




