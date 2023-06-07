// // 1. Пользователь вводит имя фамилию. Необходимо создать функцию
// // возвращающую строку вида «Привет, {имя} {фамилия}»

// {
//     const hello = function (name, lastname) {
//         alert(`Hello, ${name} ${lastname}`)
//     }
//     hello('test1', 'test2');
// }


// // 2. Напишите функцию, которая принимает строку состоящую из нескольких слов.
// // Каждое нечетное слово строки функция должна преобразовать в нижний
// // регистр, все четные слова, соответственно, в верхний
// // happy new year -> happy NEW year

// {
//     function convert(text) {
//         let array = text.split(' ');
//         let result = array.map(function (el, index) {
//             return (index + 1) % 2 != 0 ? array[index].toLowerCase() : array[index].toUpperCase();
//         });
//         return result.join(' ');
//     }
//     let text = 'hello world my name Viktor';
//     let resutl = convert(text);
//     alert(resutl);
// }



// // 3. Напишите функцию, которая принимает строку в маленьком регистре и
// // возаращает строку, где каждое слово начинается с большого регистра
// // hschool company -> Hschool Company

// {
//     function convert(text) {
//         text = text.split(' ');
//         let result = text.map(function (el) {
//             return el[0].toUpperCase() + el.slice(1);
//         })
//         return result.join(' ');
//     }
//     let text = prompt();
//     alert(convert(text));
// }

// // 4. Напишите функцию, которая принимает статичный массив строк. Необходимо
// // отфильтровать значения и оставить только те, где длина строк до 2 символов.
// // [“by”, “belarus”, “de”, “ru”, “germany”] -> [“by”, “de”, “ru”]

// {
//     function filter(text) {
//         let result = [];
//         for (i = 0; i < text.length; i++) {
//             if (text[i].length <= 2) {
//                 result.push(text[i]);
//             }
//         }
//         return result;
//     }
//     let array = ['by', 'belarus', 'de', 'ru', 'germany'];
//     array = filter(array);
//     console.log(array);
// }

// // 5. На входе массив. Необходимо создать функцию проверки на то что в массиве
// // только числа. Функция возвращает true, если в массиве только числа и false в
// // противном случае

// {
//     function chek(text) {
//         let result = true;
//         for (i = 0; i < text.length; i++) {
//             if (isNaN(text[i])) {
//                 result = false;
//             }
//         }
//         return result;
//     }
//     let array = [1, 2, 3, 4, 5];
//     console.log(chek(array));
// }

// // 6. На входе n – количество элементов массива. Далее производится заполнение
// // массива с клавиатуры. Реализуйте 2 функции. Первая для формирования
// // массива. Вторая для нахождения количества элементов массива

// {
//     function createArray(num) {
//         let array = [];
//         if (num < 0) return null;
//         for (i = 0; i < num; i++) {
//             array.push(prompt());
//         }
//         return array;
//     }
//     function chekLength(array) {
//         return array.length;
//     }

//     let n = +prompt();
//     let array = createArray(n);
//     alert(array);
//     alert(chekLength(array));
// }

// 7. На входе массив. Реализуйте 2 функции. Первая для проверки, что в массиве
// только числа. Вторая для получения суммы всех элементов массива. Если
// результат функции проверки – true, то вызывать новую функцию, возвращающую
// сумму всех элементов массива

{
    function chek(array) {
        let result = true;
        for (i = 0; i < array.length; i++) {
            if (isNaN(array[i])) {
                result = false;
            }
        }
        return result;
    }
    function sum(array) {
        let result = 0;
        for (i = 0; i < array.length; i++) {
            result += array[i];
        }
        return result;
    }
    let array = [1, 2, 3, 4, 5];
    if (chek(array)) {
        console.log(sum(array));
    }
}

