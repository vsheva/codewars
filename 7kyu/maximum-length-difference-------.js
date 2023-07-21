// ❓ DESCRIPTION:
// https://www.codewars.com/kata/5663f5305102699bad000056/javascript

//     You are given two arrays a1 and a2 of strings. Each string is composed with letters from a to z. Let x be any string in the first array and y be any string in the second array.
//
//     Find max(abs(length(x) − length(y)))
//
// If a1 and/or a2 are empty return -1 in each language except in Haskell (F#) where you will return Nothing (None).
//
//     Example:
// a1 = ["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"]
// a2 = ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"]
// mxdiflg(a1, a2) --> 13
// Bash note:
//     input : 2 strings with substrings separated by ,
//     output: number as a string

// ✅ SOLUTION:

// let array = [100, 0, 50]
// console.log(...array)


function mxdiflg(a1, a2) {

    let sortMinMax1 = a1.sort((a, b) => a.length - b.length);
    let min1 = sortMinMax1[0]
    let max1 = sortMinMax1[a1.length - 1];

    let sortMinMax2 = a2.sort((a, b) => a.length - b.length);
    let min2 = sortMinMax2[0]
    let max2 = sortMinMax2[a2.length - 1];

    let first = min1 > max2 ? min1 : max2;
    let second = max1 > min2 ? max1 : min2;

     let win = first > second ? first : second

    return win.length


    // let first = Math.min(...a1).length > Math.max(...a2).length ? Math.min(...a1).length : Math.max(...a2).length;
    // let second = Math.max(...a1).length > Math.min(...a2).length ? Math.max(...a1).length : Math.min(...a2).length;
    //
    // let win = first > second ? first : second
    //
    // return win
}

var s1 = ["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"];
var s2 = ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"];
console.log(mxdiflg(s1, s2)); //13
