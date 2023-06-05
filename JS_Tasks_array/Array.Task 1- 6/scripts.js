// console.log('Task 1');

// // 1. На входе 5 значений. Все эти значения пользователь вводит с клавиатуры и
// // заполяет массив. Далее необходимо создать массив только из чисел. Если длина
// // массива равна 0, то вывести ‘Массив пуст’. filter
// {
//     let array = [];
//     for (let i = 0; i < 5; i++) {
//         array.push(+prompt());
//     }
//     const result = array.filter(function (el) {
//         return !isNaN(el);
//     });
//     alert(result.length != 0 ? result : 'массив пуст');

// }

// console.log('Task 2');

// // 2. На входе 7 чисел. Все эти значения пользователь вводит с клавиатуры и заполяет
// // 5 первыми значениями массив. Далее необходимо создать массив из тех
// // значений, которые являются числами и НЕ равны 2 другим введенным. Если
// // длина массива равна 0, то вывести ‘Массив пуст’. Добавить проверку на ввод
// // только чисел после каждого введенного элемента. forEach

// {
//     let array = [];
//     let result = [];
//     for (let i = 0; i < 7; i++) {
//         array.push(+prompt());
//     }
//     let arrayX = array.splice(0, 5);
//     arrayX.forEach(function (el){
//         if(!array.includes(el))
//         {
//             result.push(el);
//         }
//     })
//     alert(result);
// }

// console.log('Task 3');

// // 3. На входе n – количество элементов массива. Далее производится заполнение
// // массива с клавиатуры. Необходимо вывести значения массива без дублирования.
// // Если длина массива равна 0, то вывести ‘Массив пуст’. Добавить проверку на ввод
// // только чисел после каждого введенного элемента.
// // 1, 1, 3, 4, 4, 4, 2, 5 -> 1, 2, 3, 4, 5

// {
//     let array = [1, 1, 3, 4, 4, 4, 2, 5];

//     const result = array.reduce(function (arr, item) {
//         if (!arr.includes(item)) {
//             arr.push(item);
//         }
//         return arr;
//     }, []); 
//     alert(result);
// }

// console.log('Task 4');

// // 4. Заполнять массив числами бесконечно до тех пор, пока длина массива не будет
// // равна 5. Вывести массив в консоль (цикл for, while)

// {
//     let array = [];
//     while(array.length != 5)
//     {
//         let x = +prompt();
//         if(!isNaN(x))
//         {
//             array.push(x);
//         }
//     }
//     alert(array);
// }

// console.log('Task 5');

// // 5. На входе 10 элементов. Из элементов составить 2 массива по 5 элементов. Далее
// // необходимо сравнить массивы. Если они идентичны, то вывести булевое true, в
// // противном случае false

// {
//     let array = []
//     while (array.length != 10) {
//         array.push(prompt());
//     }
//     // let a = array.splice(0,5);
//     // let result = true;
//     // for(let i = 0 ; i < a.length; i++)
//     // {
//     //     if(!array.includes(a[i])){
//     //         result = false;
//     //         break;
//     //     }
//     // }
//     // alert(result);
//     const one = array.slice(0, 5);
//     const two = array.slice(5);
//     one.sort();
//     two.sort();
//     let result = one.every(function (item, index) {
//         return item == two[index];
//     });
//     alert(result);
// }

// console.log('Task 6');

// // 6. На входе n – количество элементов массива. Далее производится заполнение
// // массива с клавиатуры. Необходимо вывести true, если хотя бы 1 элемент массива –
// // число. Some

// {
//     const n = +prompt();
//     let array = [];
//     while (array.length != n) {
//         array.push(prompt());
//     }
//     let result = array.some(function (elem) {
//         return !isNaN(elem);
//     })
//     alert(result);
// }   



