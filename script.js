let text = '  я СтуденТ КуРса  FronteNd РоЗРобОТКЭ    ';
let replaceText = text.replace("РоЗРобОТКЭ", "разработчик");        /*заменяем слово*/
let trimmedText = replaceText.trim();                               /*удаляем пробелы вначале и в конце*/
let LowerCasetext = trimmedText.toLowerCase() ;                     /*переводим в нижний регистр*/                
Result = LowerCasetext.replace("я", "Я Андрей,");                   /*делаем заглавную букву и добавляем имя*/
console.log(Result);