//https://www.codewars.com/kata/5a1dc4baffe75f270200006b/train/javascript
//https://www.codewars.com/kata/558dd9a1b3f79dc88e000001/train/javascript
//https://www.codewars.com/kata/558f0553803bc3c4720000af/train/javascript
//sort
//https://www.codewars.com/kata/57cfdf34902f6ba3d300001e/train/javascript
//https://www.codewars.com/kata/57ea5b0b75ae11d1e800006c/train/javascript
//{})]
//https://www.codewars.com/kata/589ace5eeef39faf49000061/train/javascript
/**

 */
/**  H/W: FIBONACCI
 * //https://www.codewars.com/kata/5aa39ba75084d7cf45000008/train/javascript
 //https://www.codewars.com/kata/56dc83840a10fee472000ca1/train/javascript
 //https://www.codewars.com/kata/550fac5249073256380002c0/train/javascript     */




function onlyDuplicates(str) {
    // your code here
    return str.split("").filter((el)=>str.indexOf(el)!==str.lastIndexOf(el)).join("")
}

console.log(onlyDuplicates('hello'))

//https://www.asciitable.com/

/*
let arr = [1,6,456, 78, 90]
let arr1 = ['1','6','456', '78', '90']
let arr2 = ['window', '1', '23', 'two']
let arr3 = ['a', 'c', 'z', 'l']

console.log(arr.sort((a,b)=>a-b))
console.log(arr3.sort())
*/
