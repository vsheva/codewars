/*
DESCRIPTION:
    Given an integer, return a string with dash '-' marks before and after each odd digit, but do not begin or end the string with a dash mark.

    Ex:

274 -> '2-7-4'
6815 -> '68-1-5'
*/

// function dashatize(num) {
//
//     const arr = num.toString().split("").arr.slice(1,-1).map((el)=>{
//         if (el%2===1 && i>0) {
//             return "-"+ el + "-"
//         }
//     })
//     console.log(arr)
//     return ""
// }

// function dashatize(num) {
//     return num = num.toString().split("").map(function(c){
//         return c % 2 ? "-" + c + "-" :  c ;
//     }).join("").split("-").filter(a => a != "").join("-");
//
// };

const dashatize = (num) => {

    return num.toString().split("").map(el=> el%2 ? `-${el}-` : el) //строку разбили в массив и добавили дефис к нечетным
        .join("").split("-")    //собрали массив  в строку и разбили ее в массив по дефису
        .filter(a=> a!="").join("-")// убрали пустое в строке и собрали массив в строку
}

console.log(dashatize(24452223754))
