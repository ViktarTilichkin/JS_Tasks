// Напишите программу, вычисляющую объём куба и площадь его полной
// поверхности, по введённому значению длины ребра. Используйте формулы:

let a = +prompt("введите сторону куба");

let s = 6 * a**2;

let v = a ** 3;

alert(`Полная площадь ${s}`);
alert(`Объём ${v}`);