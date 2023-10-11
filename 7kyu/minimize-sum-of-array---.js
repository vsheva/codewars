// Task
// Given an array of integers , Find the minimum sum which is obtained from summing each Two integers product .
//
//     Notes
// Array/list will contain positives only .
//     Array/list will always have even size
// Input >> Output Examples
// minSum({5,4,2,3}) ==> return (22)

function minSum(arr) {
   let newArr = arr.sort((a, b) => a - b).reduce((prev, curr) => prev + curr *arr.pop(), 0);

return newArr;
}

console.log(minSum([5, 4, 2, 3]))