//Нарисуйте треугольник**

// 1
// 2 6
// 3 7 10
// 4 8 11 13
// 5 9 12 14 15


// let result=""
// let current=1
// let rows =5
//
// for (let i = 1; i <= rows; i++) {
//
//     for (let j =1; j <=i; j++) {
//     result+=current;
//     current++
//      }
//    result =result +"\n"
// }
//  console.log(result)


//Task1
// 1
// 23
// 456
// 78910
// 1112131415

// let result=""
// let rows =5
// let start = 1
//
// for (let i = 1; i <= rows; i++) {
//
//     for (let col = 1; col<=i; col++) {
//         result+=start;
//         start++
//         //start = start + (rows -col)
//     }
//     result =result +"\n"
// }
// console.log(result)


// 1
// 2 6
// 3 7 10
// 4 8 11 13
// 5 9 12 14 15

let result = ""
let rows = 5
let start = 1

for (let i = 1; i <= rows; i++) {
    start = i;// создаем начало для каждой строки
    for (let col = 1; col <= i; col++) {
        result += start;
        //start++
        start = start + (rows - col)
    }
    // между первой и второй колонкой разделение 4 (это на 1 меньше количеста rows); м
    // между второй и третьей - шаг 3 (это на 2 меньше количеста rows);
    //между третьей и четвертой - шаг 2 (это на 3 меньше количеста rows)
    // между четвертой и пятой - шаг 1 (это на 4 меньше количеста rows);
    //---------------------------------------------------------------
    //вывод -  каждый шаг меньше на  внутренний индекс col
    // на каждом шаге  (rows-col)
    result = result + "\n"
}
console.log(result)


// Определяем количество строк в треугольнике
// const numRows = 5;
// let start = 1; // Начальное значение для первой строки
//
// // Цикл по строкам
// for (let i = 1; i <= numRows; i++) {
//     let row = ''; // Строка для текущей строки треугольника
//     let current = start; // Текущее значение для этой строки
//
//     // Цикл по элементам в строке
//     for (let j = 0; j < i; j++) {
//         row += current + ' '; // Добавляем число и пробел
//         current += numRows - j; // Увеличиваем значение для следующего элемента
//     }
//
//     // Обновляем начальное значение для следующей строки
//     start += 1;
//
//     console.log(row.trim()); // Выводим строку в консоль
// }
//


//  function sum(a, b, c = '!') {
//     let result = a / b
//     return (
//         result, c)
// }
// // //let sum2 = sum(1, 3)
// console.log(sum(1, 5))


// function sum(a, b, c = '!') {
//     let result = a / b;
//     //return `${result}${c}`;
//     //return [result, c];
//     return { result, c };
// }
//
// console.log(sum(1, 5))

// function sum(a, b, c = '!') {
//     let result = a / b;
//     return [result, c];
// }


// let sum = function(a, minus = function(){return 7-2}) {
//     return a + minus();
// };
// console.log(sum(1))

//
// let sum = function(a, minus = function(){return 7-2}) {
//     return a + minus();
// };
// console.log(sum(1))
