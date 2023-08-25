/* ❓
Complete the square sum function so that it squares each number passed into it and then sums the results together.

    For example, for [1, 2, 2] it should return 9 because
*/

// ✅

function squareSum(numbers){
    return numbers.map((el)=>Math.pow(el, 2)).reduce((a,b)=>a+b,0)

}