
//1
// *****
// ****
// ***
// **
// *


// let result="";
//
// for(let str = 5;  str >=1; str--) {
//
//     for (let eachStr = str; eachStr >=1; eachStr--) {
//         result=result+"*"
//     }
//     result=result+"\n"
//
// }
// console.log(result)


//2
// *****
// ****
// ***
// **
// *


// let result="";
//
// for(let str = 5;  str >=1; str--) {
//
//     for (let eachStr = 1; eachStr <=str; eachStr++) {
//         result=result+"*"
//     }
//     result=result+"\n"
//
// }
// console.log(result)


//3

 // *****
 //  ****
 //   ***
 //    **
 //     *


let result="";

for(let str = 1;  str <=5; str++) {
    for (let space = 1; space <str; space++) {
        result=result+"_"
    }

        for (let star = str; star<=5; star++) {
            result=result+"*"
    }
    result=result+"\n"
}
console.log(result)







// for (let i = 0; i < 5; i++) {
//     let line = ' '.repeat(i) + '*'.repeat(5 - i);
//     console.log(line);
// }


//task
