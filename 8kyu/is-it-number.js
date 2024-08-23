//https://www.codewars.com/kata/57126304cdbf63c6770012bd/train/javascript

function isDigit(s) {
    //return isNaN(+s) ? false : true
    console.log(parseFloat(s))
    return s== parseFloat(s)
}

console.log(isDigit("  3.14  "))


