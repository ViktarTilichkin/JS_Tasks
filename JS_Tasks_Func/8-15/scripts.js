// // 8. На входе массив. Реализуйте 2 функции. Первая для проверки, что в массиве
// // только строки. Вторая для получения суммы всех строчных элементов массива.
// // Если результат функции проверки – true, то вызывать новую функцию,
// // возвращающую конкатенацию всех строчных элементов массива

// {
//     function chekString(array) {
//         let result = true;
//         for (i = 0; i < array.length; i++) {
//             if (!isNaN(array[i])) {
//                 result = false;
//             }
//         }
//         return result;
//     }
//     function concatSum(array) {
//         let result = '';
//         for (i = 0; i < array.length; i++) {
//             result += ' ' + array[i];
//         }
//         return result;
//     }
//     let array = ['1, 2, 3, 4, 5', '1, 2, 3, 4, 5', '1, 2, 3, 4, 5'];
//     if (chekString(array)) {
//         console.log(concatSum(array));
//     }
// }

// // 9. На входе массив. Реализуйте 2 функции. Первая для проверки, что в массиве
// // только числа. Вторая для получения массива с удвоенными значенями каждого
// // элемента. Если результат функции проверки – true, то вызывать новую функцию,
// // возвращающую массив с удвоенными элементами


// {
//     function chekNum(array) {
//         let result = true;
//         for (i = 0; i < array.length; i++) {
//             if (isNaN(array[i])) {
//                 result = false;
//             }
//         }
//         return result;
//     }

//     function doubleValue(array) {
//         return array.map(function (el) {
//             return el * 2;
//         })
//     }
//     let array = [1, 2, 3, 4, 5];
//     if (chekNum(array)) {
//         console.log(doubleValue(array));
//     }
// }

// // 10. На входе массив. Реализуйте 2 функции. Первая для проверки, что в массиве
// // только числа. Вторая для получения только четных элементов массива. Если
// // результат функции проверки – true, то вызывать новую функцию, возвращающую
// // массив с четными элементами массива

// {
//     function chekNum(array) {
//         let result = true;
//         for (i = 0; i < array.length; i++) {
//             if (isNaN(array[i])) {
//                 result = false;
//             }
//         }
//         return result;
//     }

//     function filterEven(array) {
//         return array.filter(function (el) {
//             if (el % 2 == 0) {
//                 return el;
//             }
//         })
//     }
//     let array = [1, 2, 3, 4, 5];
//     if (chekNum(array)) {
//         console.log(filterEven(array));
//     }
// }

// // 11. На входе число. Необходимо создать функцию, возвращающую факториал числа
// // 4! = 1 * 2 * 3 * 4

// {
//     function factorial(number) {
//         if (number == 1) return 1;
//         return n * factorial(number - 1);
//     }
//     let n = +prompt();
//     alert(factorial(n));
// }

// // 12. На входе строка. Необходимо создать функцию, возвращающую true, если это
// // слово палиндром и false в противном случае

// {
//     function palindrom(text) {
//         let reverse = text.split('').reverse().join('');
//         if (text.toLowerCase() === reverse.toLowerCase()) {
//             return true;
//         }
//         return false;
//     }
//     let text = prompt();
//     alert(palindrom(text));
// }

// 13. На входе строка. Необходимо создать функцию, возвращающую true, если это
// слово анаграмма и false в противном случае

// {
//     function palindrom(text) {
//       ??
//     }
//     let text = prompt();
//     alert(palindrom(text));
// }

// // 14. На входе массив. Реализуйте 2 функции. Первая для проверки, что в массиве
// // только числа. Вторая для поиска максимального значения в массиве. Если
// // результат функции проверки – true, то вызывать новую функцию, возвращающую
// // максимальное значение массива

// {
//     function chekNum(array) {
//         let result = true;
//         for (i = 0; i < array.length; i++) {
//             if (isNaN(array[i])) {
//                 result = false;
//             }
//         }
//         return result;
//     }
//     function maxValue(array) {
//         let max = 0;
//         for (i = 0; i < array.length; i++) {
//             max = max > array[i] ? max : array[i];
//         }
//         return max;
//     }
//     let array = [1, 2, 5, 9, 87, 446, 5, 465, 1, 2];
//     if (chekNum(array)) {
//         alert(maxValue(array));
//     }
// }

// // 15. На входе n – количество элементов массива. Далее производится заполнение
// // массива с клавиатуры. Реализуйте 3 функции. Первая для формирования
// // массива. Вторая для проверки, что в массиве только числа. Третья для получения
// // произведения всех элементов массива. Если результат функции проверки – true,
// // то вызывать новую функцию, возвращающую произведение всех элементов
// // массива

// {
//     function createArray(num) {
//         let array = [];
//         if (num < 0) return null;
//         for (i = 0; i < num; i++) {
//             array.push(prompt());
//         }
//         return array;
//     }
//     function chekNum(array) {
//         let result = true;
//         for (i = 0; i < array.length; i++) {
//             if (isNaN(array[i])) {
//                 result = false;
//             }
//         }
//         return result;
//     }
//     function miltiValue(array) {
//         return array.reduce(function (milti, el) {
//             return milti * el;
//         });
//     }
//     let n = +prompt();
//     let array = createArray(n);
//     if (chekNum(array)) {
//         alert(miltiValue(array));
//     }
// }