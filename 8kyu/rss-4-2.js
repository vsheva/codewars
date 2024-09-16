// 2. Нарисуйте елочку
//     *
//    ***
//   *****
//  *******
// *********


let result="";

for(let str = 1;  str <=5; str++) {

    for (let space = str; space <=5; space++) {
        result=result+"_"
    }

    for (let star = str; star>=1; star--) {
        result=result+"*"
    }

    for (let star = str; star>1; star--) {
        result=result+"*"
    }

    result=result+"\n"
}
console.log(result)
