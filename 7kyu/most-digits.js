// Description:
//     Find the number with the most digits.
//
//     If two numbers in the argument array have the same number of digits, return the first one in the array.

// let findLongest = (value)=>{
//     const lengths= value.map((el)=>el.toString().length)
//     const maxLength = Math.max(...lengths)
//
//     console.log ("lengths", lengths)
//
//
//     if(lengths.length) {
//        return  value[lengths.indexOf(maxLength) ]
//     } else {
//       return  value[0]
//     }
//
// }

// let findLongest = (value)=>{
//     return value.reduce((prev, el)=>String(prev).length> String(el).length ? prev : el )
// }


const findLongest=(array)=>array.reduce((acc, el) => (String(acc).length < String(el).length) ? el : acc);

console.log(findLongest([9000, 8, 800]))



// let findLongest = (value)=>{
//     const length= value.map(el=>el.toString().length);
//     console.log("length", length)
//     const maxLength = Math.max(...length);
//     const idx = length.indexOf(maxLength);
//
//     return value[idx]
//
// }
//
// console.log(findLongest([9000, 8, 800]))
