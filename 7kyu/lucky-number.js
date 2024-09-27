function isLucky(n) {
    // let num = n.toString()
    // let sum=0;
    // for(let i = 0; i < num.length; i++) {
    //     sum = sum + num[i];
    // }
    // return sum%9==0
    //36, 54
    return n % 9 == 0;//если сумма всех цифр в числе делится на 9- то и все число делится на 9
}

console.log(isLucky(1892376))
