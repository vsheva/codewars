// ❓ DESCRIPTION:

//https://www.codewars.com/kata/580a4734d6df748060000045/javascript

//     Complete the method which accepts an array of integers, and returns one of the following:
//
//     "yes, ascending" - if the numbers in the array are sorted in an ascending order
// "yes, descending" - if the numbers in the array are sorted in a descending order
// "no" - otherwise
// You can assume the array will always be valid, and there will always be one correct answer.

// ✅ SOLUTION:


function isSortedAndHow(array) {
    // let message = JSON.stringify(array) === JSON.stringify(array.sort((a, b) => a - b)) ? "yes, ascending" :
    //     JSON.stringify(array) === JSON.stringify(array.sort((a, b) => b - a)) ? "yes, descending" :
    //         "no";
    // return message

    switch (JSON.stringify(array)) {
        case JSON.stringify(array.sort((a, b) => a - b)):
           return "yes, ascending";
            break;
        case JSON.stringify(array.sort((a, b) => b - a)):
           return "yes, descending"
            break;
        default:
           return "no";

    }
}

console.log(isSortedAndHow([1, 2]))
console.log(isSortedAndHow([15, 7, 3, -8]))
console.log(isSortedAndHow([4, 2, 30]))
