// 1. Пользователь вводит имя фамилию. Необходимо создать функцию
// возвращающую строку вида «Привет, {имя} {фамилия}»

{
    const hello = function (name, lastname) {
        alert(`Hello, ${name} ${lastname}`)
    }
    hello('test1', 'test2');
}


// 2. Напишите функцию, которая принимает строку состоящую из нескольких слов.
// Каждое нечетное слово строки функция должна преобразовать в нижний
// регистр, все четные слова, соответственно, в верхний
// happy new year -> happy NEW year

{
    function convert(text) {
        let array = text.split(' ');
        let result = array.map(function (el, index) {
            return (index + 1) % 2 != 0 ? array[index].toLowerCase() : array[index].toUpperCase();
        });
        return result.join(' ');
    }
    let text = 'hello world my name Viktor';
    let resutl = convert(text);
    alert(resutl);
}



// 3. Напишите функцию, которая принимает строку в маленьком регистре и
// возаращает строку, где каждое слово начинается с большого регистра
// hschool company -> Hschool Company