// 1. Дана строка **'ddd@bbb@ccc'**. Замените все **@** на **'!'**
let myString = 'ddd@bbb@ccc';
document.write(myString.replaceAll("@", "!"));

// 2. Дана строка **'js'**. Сделайте из нее строку **'JS'**.
 let myLowString = "js";
 document.write(`<br>` + myLowString.toLocaleUpperCase());

//  3. Дана строка **'JS'**. Сделайте из нее строку **'js'**.
let myUpperString = "JS";
 document.write(`<br>` + myUpperString.toLocaleLowerCase());

//  4. Дана строка**'I am a hero!'**. Выведите в консоль **количество символов** в этой строке.
let myLongString = 'I am a hero!';
console.log(myLongString.length);

// 5. Составить скрипт, который запрашивает у пользователя ввести номер кредитной карты. Скрипт должен обработать полученный номер и показать на странице последние 4 цифры а остальные цифры карты должны заменены на *.
    
//     **Пример: "Номер вашей карты: **********1245"**
let myCard = prompt("Введите номер вашей карты");
document.write(`<br>` + "Номер вашей карты" + myCard.replace(myCard.slice(0, -4), "********"));