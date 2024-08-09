// Write a function reverse which reverses a list (or in clojure's case, any list-like data structure)
//
// (the dedicated builtin(s) functionalities are deactivated)
//


// const reverse = (array)=>{
//     //return array.reverse().join('')
//
//     //return array.slice(0).reverse().map(el=>el)
//
//     let reversedArray = [];
//
//     // Iterate over the original array from the end to the beginning
//     for (let i = array.length - 1; i >= 0; i--) {
//         reversedArray.push(array[i]);
//     }
//
//     return reversedArray;
// }

const reverse = (array)=>{

    let newArr = []
//1 map
//     array.map(el=>{
//         newArr.unshift(el)
//     })

//2 for of
//     for(let el  of array) {
//         newArr.unshift(el)
//     }

// for

    for(let i = array.length-1; i>=0; i--) {
        newArr.push(array[i])
    }


    return newArr
}

console.log( reverse([1,null,14,"two"]))
