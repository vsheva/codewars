/*
Create a function add(n)/Add(n) which returns a function that always adds n to any number

Note for Java: the return type and methods have not been provided to make it a bit more challenging.

    var addOne = add(1);
addOne(3); // 4

var addThree = add(3);
addThree(3); // 6
*/


/*
function add(n) {
    return function(x) {
        return n+x
    }
}

var addOne = add(1);
addOne(3); // 4

var addThree = add(3);
addThree(3); //
6*/




function makeCounter(x) {

    return function(y) {
        return x-y; // есть доступ к внешней переменной
    };
}

let counter = makeCounter(100) //x; /console.log( makeCounter(100) ); //[Function (anonymous)]
//let counter

console.log( counter(3) ); // 97
console.log( counter(15) ); // 85
console.log( counter(8) ); // 92


//
// function add(n) {
//     return function (m) {
//         return n+m;
//     }
// }
//
// let addOne = add(1);
// addOne(3);
