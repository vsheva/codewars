// 12345
// 1234
// 123
// 12
// 1


/*let result =""

for (let i = 5; i >=1; i--) {
    for (let j = 1; j<=i; j++) {
        result +=j
    }
    result +="\n"
}
console.log(result)*/

//1 2 3 4 5
//1234
//123
//12
//1


// let reverse =(array)=>{
//     let newArr=[]
//     for(let i=array.length-1; i>=0; i--) {
//         newArr.push(array[i])
//     }
//     return newArr;
// }
//
// console.log(reverse([1,2,3]))



let result = "";

for (let str = 10; str > 1; str--) {
    for (let space = 1; space < str; space++) {
        result += "_";
    }

    let start = 1;
    for (let i = str; i <= 10; i++) {
        result += start;
        start++;
    }

    let start2 = 1;
    let row = [];
    for (let star = str; star < 10; star++) {
        row.push(start2);
        start2++;
    }

    // Добавляем строку только если это не последняя

        result += row.reverse().join('') + "\n";

}

console.log(result);

















// let result =""
//
// for (let i = 5; i >=1; i--) {
//     for (let j = 1; j<=i; j++) {
//      result +=j
//     }
//     result +="\n"
// }
// console.log(result)
