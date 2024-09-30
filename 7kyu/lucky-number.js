// function isLucky(n) {
//     // let num = n.toString()
//     // let sum=0;
//     // for(let i = 0; i < num.length; i++) {
//     //     sum = sum + num[i];
//     // }
//     // return sum%9==0
//     //36, 54
//     return n % 9 == 0;//если сумма всех цифр в числе делится на 9- то и все число делится на 9
// }
//
// console.log(isLucky(1892376))


function pow(x, n) {
    if (n == 1) {
        console.log("x1= ", x)
        console.log("nIF= ", n)
        return x;
    } else {
        console.log("x2= ", x)
        console.log("nELSE= ", n)
        return x * pow(x, n - 1);
    }
}

console.log( pow(2, 3) );
