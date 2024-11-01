// function sameCase(a, b) {
//     let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.toLowerCase();
//
//     if (!alphabet.includes(a.toLowerCase()) || !alphabet.includes(b.toLowerCase())) return -1
//
//     // if (a.toLowerCase() === a.toUpperCase() || b.toUpperCase() === b.toLowerCase()) {
//     //     return -1
//     // }
//      if (a === a.toLowerCase() && b === b.toLowerCase() || a === a.toUpperCase() && b === b.toUpperCase()) return 1
//
//     return 0
//
// }

/*
The first condition checks if either a is not a letter
(all uppercase or all lowercase) or b is not a letter.
    This is done by checking if a becomes equal to itself
when converted to both uppercase and lowercase, or if b becomes
equal to itself when converted to both lowercase and uppercase.
    If either condition is true, it means at least one of the
characters is not a letter, so the function returns -1.
*/


