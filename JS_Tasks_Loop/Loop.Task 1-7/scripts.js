// console.log('Задача 1');
// // 1. Найти максимальное число из 2 введенных (2 способа)

// const a = +prompt('Enter value a');
// const b = +prompt('Enter value b');

// alert(`${a > b ? 'a больше' : 'b больше'}`);
// alert(Math.max(a, b));

console.log('Task 2');
{
    // 2. Дан статичный массив элементов. С помощью цикла for найдите произведение
    // всех элементов массива

    const array = [12, 1, 5, 6, 8, 987, 96, 54, 123];
    let result = 0;
    for (let i = 0; i < array.length; i++) {
        result += array[i];
    }
    alert(result);
}

// console.log('задача 3');

// // 3. Пользователь вводит число от 1 до 7, соответствующее дню недели. Необходимо
// // вывести день для введенного числа.
// // 1 -> Понедельник

// const num = +prompt('Номер дня недели');

// switch(num){
//     case 1 : console.log('понедельник');
//     break; 
//     case 2 : console.log('вторник');
//     break; 
//     case 3 : console.log('среда');
//     break; 
//     case 4 : console.log('четверг');
//     break; 
//     case 5 : console.log('пятница');
//     break;
//     case 6 : console.log('суббота');
//     break; 
//     case 7 : console.log('воскресенье');
//     break;  
//     default : console.log('error input');
// }

// console.log('Задача 4');

// // 4. Есть значение. Добавить проверку на ввод только чисел. Если число, вывести true,
// // в противном случае false (isNaN)

// const number = prompt('Введите число');
// alert(!isNaN(number));

// console.log('Задача 5');

// // 5. Пользователь вводит число с клавиатуры. Нужно вывести на экран сколько в этом
// // числе цифр, а также положительное оно или отрицательное. Например, "Число " +
// // num + " положительное". Добавить проверку на число

// const number = +prompt();

// if (!isNaN(number)) {
//     alert(`Длинна числа ${Math.abs(number).toString().length}, ${number} ${number > 0 ? 'положительное' : 'отрицательное'}`);
// }
// else {
//     alert('Not a number');
// }

// console.log('Задача 6');

// // 6. Найти квадратный корень числа. Если же число без плавающей точки, то просто
// // вывести его. В противном случае необходимо округлить число до целых.
// // Добавить проверку на ввод только чисел

// const number = +prompt();

// if (!isNaN(number)) {
//     alert(number % 1 == 0 ? number : Math.round(number));
// }
// else {
//     alert('error input');
// }

// console.log('Задача 7');

// // 7. Два автомобиля едут друг к другу с постоянными скоростями V1 и V2 км/ч.
// // Определите, через какое время автомобили встретятся, если расстояние между
// // ними равно S км. Добавить проверку на ввод только чисел


// const v1 = +prompt('enter speed car 1');
// const v2 = +prompt('enter speed car 2');
// const s = +prompt('enter km');

// if (isNaN(v1) || isNaN(v2) || isNaN(s)) {
//     alert('error input');
// }
// else {
//     alert(`Встретятся через ${s / (v1 + v2)} часов`);
// }

