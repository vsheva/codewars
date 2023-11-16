/*
Given a mixed array of number and string representations of integers, add up the non-string integers and subtract the total of the string integers.

    Return as a number.
    */

// function divCon(x){
//     let numArrayResult = x.filter((el)=> typeof el==='number').reduce((a,b)=>a + b, 0)
//
//
//     let stringArrayResult = x.filter((el)=> typeof el==='string').reduce((a,b)=>+a + +b, 0)
//
//     return numArrayResult - stringArrayResult
// }

function divCon(x){
    return x.reduce((acc, cur) => typeof cur === 'number'? acc + cur : acc - Number(cur),0)
}


console.log(divCon([9, 3, '7', '3']))