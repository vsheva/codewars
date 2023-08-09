// ❓ DESCRIPTION:
//     Write a function which removes from string all non-digit characters and parse the remaining to number. E.g: "hell5o wor6ld" -> 56
//
// Function:
//
//     getNumberFromString(s)

// ✅

function getNumberFromString(s) {
    return +s.replace(/\D/g, "");
}



// function getNumberFromString(s) {
//     let num =s.match(/\d/g);
//     num = num.join("");
//     return +num
// }

console.log(getNumberFromString("this is number: 7"))