// console.log('task 32');

// // 32. На входе строка, необходимо убрать все лишние пробелы и привести каждый
// // элемент к нижнему регистру. Повторить строку 3 раза. Добавить проверку на
// // ввод только текстовых значений


// {
//     let text = prompt();
//     if (isNaN(text)) {
//         text = text.toLowerCase().trim();
//         alert(text.repeat(3));
//     }
//     else {
//         alert('error');
//     }
// }

// console.log('task 33');

// // 33. Дана строка из 3 слов разделенных пробелом:
// // • Найдите количество символов в этой строке.
// // • Вырежите из нее 2 и 3 слова.
// // • Найдите индекс 2 подстроки


// {
//     let text = prompt();
//     if (isNaN(text)) {
//         alert(text.length);
//         text = text.split(' ');
//         text.splice(1, 2);
//         text = text.toString();
//         alert(text);
//         alert(text.length);
//     }
//     else {
//         alert('error');
//     }
// }

// console.log('Task 34');

// // 34.Пользователь вводит дату в формате ‘х-х-х'. Замените все дефисы на '!'

// {
//     let text = prompt();
//     alert(text.split('-').join('!'));
// }

// console.log('Task 35');

// // 35. Пользователь вводит дату в формате 'xxxx-xx-xx'. Преобразуйте эту дату в формат
// // 'xx.xx.xxxx.


// {
//     let text = prompt();
//     alert(text.split('-').reverse().join('.'));
// }


// console.log('Task 36');

// // 36. На вход подается url. Если он начинается с http, содержит хотя бы один “/” и
// // заканчивается подстрокой .com или .ru, то вывести true, в противном случае false

// {
//     let text = prompt();
//     if (text.includes('http') && text.includes('/') && (text.endsWith('.com') || text.endsWith('.ru'))) {
//         alert(true);
//     }
//     else {
//         alert(false);
//     }
// }

// console.log('Task 37');

// // 37. Дан массив ['я', 'учу', 'javascript', '!']. С помощью метода join преобразуйте массив в
// // строку 'я+учу+javascript+!.


// {
//     let array = ['я', 'учу', 'javascript', '!'];
//     alert(array.join('+'));
// }

// console.log('Task 38');

// // 38.На вход программе подается строка, состоящая из имени и фамилии человека,
// // разделенных одним пробелом. Напишите программу, которая проверяет, что имя
// // и фамилия начинаются с заглавной буквы.
// // Chris Alan => true
// // chris alan => false

// {
//     let name = prompt();
//     name = name.split(' ');
//     let nameSymb = name[0][0];
//     let lastSymb = name[1][0];
//     alert(nameSymb === nameSymb.toUpperCase() && lastSymb === lastSymb.toUpperCase());
// }

// console.log('Task 39');

// // 39. На вход программе подается строка текста. Напишите программу, которая
// // определяет является ли строка хорошей. Текст хороший, если содержит
// // подстроку «хорош» во всевозможных регистрах.
// // я очень хороший текст => true

// {
//     let text = prompt();
//     alert(text.toLowerCase().includes('хорош'));
// }