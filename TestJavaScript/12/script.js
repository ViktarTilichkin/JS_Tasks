// Напишите программу для пересчёта величины временного интервала, заданного
// в минутах, в величину, выраженную в часах и минутах:

let a = +prompt("Введите минуты");

let min = a % 60;
let hour = (a - min) / 60;

alert(`${hour} часы ${min} минуты`); 
