// function isOdd(n) {
//     return Math.abs(n)%2===1
// }
//
// console.log(isOdd(5))

function isDivisible(n, x, y) {
    return (n%x===0) && (n%y===0)
}

console.log(isDivisible(3,3, 4))
