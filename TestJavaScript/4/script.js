// У известного американского писателя Рэя Бредбери есть роман «451 градус по
// Фаренгейту». Напишите скрипт, который определяет, какой температуре по
// шкале Цельсия соответствует указанное значение по шкале Фаренгейта.


let f = +prompt("Введите фарингейты");
let c = 5 / 9 * (f - 32);
alert(c);