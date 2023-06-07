// console.log('task 24');

// // 24.Преобразовать строку ‘ Full StaCK DevELoper ’ в массив вида [‘full, ‘stack’,
// //     ‘developer’]

// {
//     let text = prompt();
//     if (isNaN(text)) {
//         text = text.toLowerCase().split(' ');
//         alert(text);
//     }
//     else {
//         alert('error');
//     }
// }

// console.log('task 25');

// // 25. Ввести строку. Проверить на isNaN. Если число, то ошибка ввода. Если это строка
// // то узнать какая у нее длина. Привести к одному регистру, убрать лишние пробелы

// {
//     let text = prompt();
//     if (isNaN(text)) {
//         text = text.trim().toLowerCase();
//         alert(`${text} ${text.length}`);
//     }
//     else {
//         alert('error');
//     }
// }

// console.log('Task 26');

// // 26. ‘HTML JavaScript PHP’ преобразовать в "HTML-JAVASCRIPT-PHP"

// {
//     let text = 'HTML JavaScript PHP';
//     alert(text);
//     text = text.toUpperCase().split(' ').join('-');
//     alert(text);
// }

// console.log('Task 27');

// // 27. Ввести строку. Проверить является ли это число или строка. Если число, то
// // ошибка ввода. Если это строка то первый символ поставить в верхний регистр.
// // Убрать лишние пробелы

// {
//     let text = prompt();
//     if (isNaN(text)) {
//         text = text.trim();
//         text = text[0].toUpperCase() + text.slice(1);
//         alert(text);
//     }
//     else {
//         alert('error');
//     }
// }

console.log('Task 28');
{
    //     28.Дан массив с элементами [1, 2, 2, 3, 4, 4, 3, 4, 5]. Выведите только уникальные
    // значения массива -> [1, 5] (for)
    const array = [1, 2, 2, 3, 4, 4, 3, 4, 5];
    const result = [];
    for (let i = 0; i < array.length; i++) {
        let x = 0
        for (let j = 0; j < array.length; j++) {
            if (array[i] == array[j]) {
                x++;
            }
        }
        if (x == 1 && !result.includes(array[i])) {
            result.push(array[i]);
        }
    }
    console.log(result);
    const array1 = [1, 2, 2, 3, 4, 4, 3, 4, 5];
    const result1 = [];

    for (let i = 0; i < array.length; i++) {
        const value = array[i];
        let unique = true;

        for (let j = 0; j < array.length && unique; j++) {
            if (i === j) continue;

            unique = value !== array[j];
        }

        if (unique) {
            result.push(value);
        }
    }
    console.log(result);
}

// console.log('Task 29');

// // 29. На вход программе подаётся строка. Замените все @ на '!' (2 способа)

// {
//     let text = prompt();
//     let result = text.split('@').join('!');
//     alert(result);
//     result = '';
//     for (let i = 0; i < text.length; i++) {
//         if (text[i] == '@') {
//             result += '!';
//         }
//         else {
//             result += text[i];
//         }
//     }
//     alert(result);
// }

// console.log('Task 30');

// 30.Дана строка 'aaa bbb ccc'. Вырежите из нее слово 'bbb'

// {
//     let text = 'aaa bbb ccc';
//     let array = text.split(' ');
//     array.splice(1, 1);
//     alert(array);
// }

// console.log('Task 31');

// // 31. На вход программе подается переменная date, в котрой лежит дата в формате
// // 'xxxx-xx-xx'. Преобразуйте эту дату в формат 'xx/xx/xxxx’. (reverse)

// {
//     let date = prompt();
//     date = date.split('-').reverse().join('/');
//     alert(date);
// }