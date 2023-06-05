// console.log('Task 7');

// //7. На входе задан массив [‘hschool’, ‘hschool_0’, ‘hschool_1’]. Напишите все возможные
// // способы обращения к первому и последнему элементам

// {
//     let array = ['hschool', 'hschool_0', 'hschool_1'];
//     alert(array[0], array[array.length-1]);

// }

// console.log('Task 8');

// // 8. На входе n – количество элементов массива. Далее производится заполнение
// // массива с клавиатуры. Если все элементы массива – числа, то вывести логическое
// // true, в противном случае false. Every, forEach


// {
//     let array = [];
//     let n = +prompt();
//     for (i = 0; i < n; i++) {
//         array.push(prompt());
//     }
//     const result = array.every(function (elem) {
//         return isNaN(elem);

//     })
// }

// console.log('Task 9');

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

// console.log('Task 10');

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

// console.log('Task 11');

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