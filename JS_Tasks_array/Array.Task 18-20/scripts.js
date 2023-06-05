// console.log('Task 18');

// // 18. На входе n – количество элементов массива. Далее производится заполнение
// // массива с клавиатуры. Необходимосоздать новый массив, где каждый элемент
// // возведен в квадрат. map

// {
//     const n = +prompt();
//     let array = [];
//     while (array.length != n) {
//         array.push(+prompt());
//     }
//     let result = array.map(function (el) {
//         return el ** 2;
//     })
//     alert(result);
// }

// console.log('Task 19');

// // 19. На входе n – количество элементов массива. Далее производится заполнение
// // массива с клавиатуры (хотя бы один элемент массива – 0). Необходимо вывести
// // сумму всех значений массива до первого 0. Добавить проверки на ввод чисел. 

// {
//     const n = +prompt();
//     let array = [];
//     while (array.length != n) {
//         array.push(+prompt());
//     }
//     if (array.includes(0)) {
//         let sum = 0;
//         let result = array.every(function (el) {
//             if (el != 0) {
//                 sum += el;
//                 return true;
//             }
//             else {
//                 return false;
//             }
//         })
//         alert(sum);
//     }
//     else {
//         alert('error');
//     }
// }

// console.log('Task 20');

// // 20.На входе n – количество элементов массива. Далее производится заполнение
// // массива с клавиатуры. Оставьте в нем только положительные числа. Filter

// {
//     const n = +prompt();
//     let array = [];
//     while (array.length != n) {
//         array.push(+prompt());
//     }
//     let result = array.filter(function (el, arr) {
//         return el > 0 ? true : false;
//     })
//     alert(result);
// }