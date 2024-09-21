//Task1
// 1
// 23
// 456
// 78910
// 1112131415

// let result=""
// // let rows =5
// // let start = 1
// //
// // for (let i = 1; i <= rows; i++) {
// //
// //     for (let col = 1; col<=i; col++) {
// //         result+=start;
// //         start++
// //
// //     }
// //     result =result +"\n"
// // }
// // console.log(result)



let result = "";

for (let str = 10; str >= 1; str--) {
    for (let space = 1; space < str; space++) {
        result += "_"
    }

    let start = 1
    for (let i = str; i <= 10; i++) {
        result += start;
        start++;
    }

    let start2 = 1
    for (let star = str; star < 10; star++) {

        result += start2;
        start2++;
    }

    result =result +"\n"
}


for (let str = 9; str >= 1; str--) {
    for (let space = str; space <= 9; space++) {
        result += "_"
    }

    for (let star = 1; star <= str; star++) {
        result += star
    }

    for (let star = 1; star < str; star++) {
        result += star
    }

    result = result + "\n"
}


console.log(result)







/*

let result = "";

for (let str = 10; str >= 1; str--) {
    for (let space = 1; space < str; space++) {
        result += "_"
    }

    let start = 1
    for (let i = str; i <= 10; i++) {
        result += start;
        start++;
    }

    let start2 = 1
    let currentString=''
    for (let star = str; star < 10; star++) {
        //currentString=`${start}${currentString}`
        result += start2;
        start2++;
    }

    result =result +"\n"
}


for (let str = 9; str >= 1; str--) {
    for (let space = str; space <= 9; space++) {
        result += "_"
    }

    for (let star = 1; star <= str; star++) {
        result += "*"
    }

    for (let star = 1; star < str; star++) {
        result += "*"
    }

    result = result + "\n"
}


console.log(result)
*/











// let result = "";
// let rows = 5;
// let start = 1;
//
// for (let i = 1; i <= rows; i++) {
//     let currentLine = ""; // Строка для текущей строки
//
//     // Сначала формируем строку
//     for (let col = 1; col <= i; col++) {
//         currentLine = ` ${start} ${currentLine}`; // Добавляем число в начало строки
//         console.log("current line: " + currentLine)
//         start++;
//     }
//
//     result += currentLine + "\n"; // Добавляем текущую строку в результат
// }
//
// console.log(result);
