function findDup(array) {
   
    //sum=(1+n)*n/2

    let n = array.length-1;
    let sum = (1 + n)*n/2;
    let sum2= array.reduce((acc,b)=>acc+b, 0);
    console.log("sum: " +sum, )
    console.log("sum2: " +sum2, )
    console.log("n: " +n)
    console.log("sum2-sum: " +(sum2-sum))
    return sum-sum2
}

console.log(findDup([1,2,3,1]))


//return arr.filter(el=>array.indexOf(el)!==array.lastIndexOf(el))[0]

/*
for(let el of array) {
    if(array.indexOf(el)!=array.lastIndexOf(el)) {
    return el
    }
}
*/
