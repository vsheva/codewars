// ❓ Write Number in Expanded Form
// You will be given a number and you will need to return it as a string in Expanded Form. For example:
//
//     expandedForm(12); // Should return '10 + 2'
// expandedForm(42); // Should return '40 + 2'
// expandedForm(70304); // Should return '70000 + 300 + 4'
// NOTE: All numbers will be whole numbers greater than 0.

// ✅ Solution

//https://www.codewars.com/kata/5842df8ccbd22792a4000245/solutions

function expandedForm(num) {
    return String(num)
        .split("")
        .map((num, index, arr) => num + "0".repeat(arr.length - index -1 ))
        .filter((num) => Number(num) != 0)
        .join(" + ")
}



function expandedForm(num) {
    const numStr = String(num);

    const result =[]

    for(let i = 0; i < numStr.length; i++) {
        if(numStr[i] !=="0") {
            result.push(numStr[i] + "0".repeat(numStr.length-i-1))
        }
    }

    return result.join(" + ")

}



//
// function expandedForm(num) {
//     const numStr = String(num);
//     const result = [];
//
//     for (let i = 0; i < numStr.length; i++) {
//         if (numStr[i] !== '0') {
//             result.push(numStr[i] + '0'.repeat(numStr.length - i - 1));
//         }
//     }
//
//     return result.join(' + ');
// }

// Test cases
console.log(expandedForm(12));    // Output: '10 + 2'
console.log(expandedForm(42));    // Output: '40 + 2'
console.log(expandedForm(70304)); // Output: '70000 + 300 + 4'