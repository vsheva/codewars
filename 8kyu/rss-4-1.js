//Нарисуйте ромб*

// let result =""
//
// for (let i = 5; i >=1; i--) {
//     for (let j = 1; j<=i; j++) {
//         result +=j
//     }
//     result +="\n"
// }
// console.log(result)



//Верх лево
let result="";

for(let str = 10;  str >=1; str--) {
    for (let space =1; space <str; space++) {
        result=result+"_"
    }

    for (let star = str; star<=10 ; star++) {
        result=result+"*"
    }

    for (let star = str; star<10 ; star++) {
        result=result+"*"
    }

    result=result+"\n"
}
console.log(result)

////низ лево
let result1="";

for(let str = 20;  str >=11; str--) {
    for (let space = str; space <20; space++) {
        result1=result1+"_"
    }

    for (let star = 11; star<=str; star++) {
        result1=result1+"*"
    }

    for (let star = 11; star<str; star++) {
        result1=result1+"*"
    }


    result1=result1+"\n"
}


console.log(result1)



