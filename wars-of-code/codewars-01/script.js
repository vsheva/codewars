// let str = "Hello Valera my name Vika";


// a = str.split("");             //1
// console.log(a);

// b = str.split("").reverse();            //2
// console.log(b);

// c = str.split("").reverse().join("");            //3
// console.log(c);

// n = str.split("").reverse().join("").split(" ");         //4
// console.log(n);

// f = str.split("").reverse().join("").split(" ").reverse();          //5
// console.log(f);

// g = str.split("").reverse().join("").split(" ").reverse().join(" ");         //6
// console.log(g);

// e = str.split("").reverse().join("").split("");                     //7
// console.log(e);

// s = str.split("").reverse().join("").split("").reverse();               //8
// console.log(s);

// m = str.split("").reverse().join("").split("").reverse().join("");          //9
// console.log(m);

// function countSheeps(arrayOfSheep) {

//   let count = 0;
//   arrayOfSheep.forEach((element) => {
//     if (element === true) {
//       count++;
//     }
//     return count;
//   });
// }

// console.log(coun);

// const initial = (str) => {
//   return str
//     .split(" ")
//     .map((a) => a.substr(0, 1).toUpperCase())
//     .join(" ");
// };

// console.log(initial("Валера Шевченко"));

// const oddOrEven = a => a.reduce((a, b) => a + b, 0) % 2 === 0 ? 'even' : 'odd';
//______________________________________________________________________-____________________
// function sum(numbers) {
//   "use strict";
//   return numbers.reduce((a, b) => a + b, 0);
// }

// sum([]);
//___________________________________________________________________________________________
//1
// function points(games) {
//   let total = 0;

//   games.map((game) => {
//     if (game[0] === game[2]) {
//       total += 1;
//     } else if (game[0] > game[2]) {
//       total += 3;
//     }
//   });
//   return total;
// }

// console.log(
//   points(["2:0", "3:0", "4:0", "2:1", "3:1", "4:1", "3:2", "4:4", "4:3"])
// );

//___________________________________________________________________________________________
//2
// function squareDigits(num) {
//   return Number(String(num).split("").map((el) => el * el).join(""));
// }

// console.log(squareDigits(9119));

// you are asked to square every digit of a number and concatenate them.

// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

// Note: The function accepts an integer and returns an integer

//_________________________________________________________________________________________________________________________

//3
//Write a function which calculates the average of the numbers in a given list.

// Note: Empty arrays should return 0.

// function find_average(array) {
//   if (array.length == 0) return 0;
//   let a = array.reduce((a, b) => {
//     return a + b;
//   }, 0);
//   let total = a / array.length;
//   return total;
// }

// console.log(find_average([5, 10, 20, 5]));

//___________________________________________________________________________
//4
// Вам будет предоставлен массив a и значение x. Все, что вам нужно сделать, это проверить,
// содержит ли предоставленный массив значение. Массив может содержать числа или строки.
// X может быть любым. Вернуть истину, если массив содержит значение, и ложь, если нет.

// function check(a, x) {
//   return a.includes(x);
// }

// console.log(check([66, 101], 66));

//_______________________________________________________________________________________________________
//5  Given a string of digits, you should replace
// any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

// function fakeBin(x) {
//   x.split("")
//     .map((x) => {
//       return x < 5 ? 0 : 1;
//     })
//     .join("");
// }

//6________________________________________________________________________________________

// Summation
// Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.

// For example:
// summation(2) -> 3
// 1 + 2
// summation(8) -> 36
// 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8

// const summation = n => n * (n + 1) / 2;

//7_____________________________________________________________________

// Create a function that gives a personalized greeting. This function takes two parameters: name and owner.

// Use conditionals to return the proper message:

// case	return
// name equals owner	'Hello boss'
// otherwise	'Hello guest'

//8________________________________________________________________________
// Complete the solution so that it reverses the string passed into it.

// 'world'  =>  'dlrow'
// 'word'   =>  'drow'

// function solution(str) {
//   return str.split("").reverse().join("");
// }
// console.log(solution("world"));

//9___________________________________________________________________________
// Write function bmi that calculates body mass index (bmi = weight / height2).

// if bmi <= 18.5 return "Underweight"

// if bmi <= 25.0 return "Normal"

// if bmi <= 30.0 return "Overweight"

// if bmi > 30 return "Obese"

// function bmi(weight, height) {
//   let res = weight / (height * height);

//   if (res <= 18.5) {
//     return "Underweight";
//   }
//   if (res <= 25.0) {
//     return "Normal";
//   }
//   if (res <= 30.0) {
//     return "Overweight";
//   }
//   if (res > 30) {
//     return "Obese";
//   }
// }

// console.log(bmi(100, 2));

//10______________________________________________________________s

// function grow(x) {
//  return x.reduce((a, b) => {
//     return a * b;
//   });
// }

// console.log(grow([1, 2, 3, 4]));
//

//11________________________________________________________
// const helloWorld = () => {
//   // feel free to change this into a function :)
//   return String.fromCharCode(72, 101, 108, 108, 111, 44, 32, 87, 111, 114, 108, 100, 33);
// };

//12_________________________________________________________
// Description:
// Take 2 strings s1 and s2 including only letters from ato z.
//  Return a new sorted string, the longest possible, containing distinct letters -
//  each taken only once - coming from s1 or s2.
// Examples:
// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"
// a = "abcdefghijklmnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"

// function longest(s1, s2) {
//     // your code
//     return Array.from(new Set(s1+s2)).sort().join("")
//   }

//12
// const removeEveryOther = arr => arr.filter((item, i) =>  i % 2 == 0);

// function findNeedle(haystack) {
//     return "found the needle at position " + haystack.indexOf("needle");
//   }

//13
// function getAge(inputString){
//     // return correct age (int). Happy coding :)
//       return parseInt(inputString)
//     }

//14

// function positiveSum(arr) {
//   return arr
//     .map((x) => x > 0)
//     .reduce((sum, x) => {
//       return sum + x;
//     });
// }
//14
// function positiveSum(arr) {
//   let sum = 0;
//   arr.forEach((x) => {
//     if (x > 0) {
//       sum += x;
//     }
//   });
//   return sum;
// }

// console.log(positiveSum([1, -2, 3, 4, 5, 6]));
// function removeEveryOther(arr){
//   return arr.filter(function(elem, index) {
//     return index % 2 === 0;
//   });
// }

// function removeEveryOther(arr){
//   return arr.filter((i,index)=>{return index %2 ===0})
// }

// console.log(removeEveryOther([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

// function findMultiples(integer, limit) {
//   //your code here
//   let result = [];
//   for (i = integer; i < limit; i = i + integer) {
//     result.push(i);
//   }
//   return result;
// }
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
// let track1 = 5 > 4; //true
// let track2 = "ананас" > "яблоко"; //false
// let track3 = "2" > "12"; //true
// let track4 = undefined == null; //true
// let track5 = undefined === null; //false
// let track6 = null == "\n0\n"; //false
// let track7 = null === +"\n0\n"; //false
// console.log(track1);
// console.log(track2);
// console.log(track3);
// console.log(track4);
// console.log(track5);
// console.log(track6);
// console.log(track7);
////////////////////////////////////////////////////////////////////////////

// let value = prompt ("What's the "официальное название" JavaScript?")

// if (value == "ECMAScript") {
//   return "правильно"
// } else {
//   return Не знаете? “ECMAScript”!
// }

// let message;

// if (login == 'Сотрудник') {
//   message = 'Привет';
// } else if (login == 'Директор') {
//   message = 'Здравствуйте';
// } else if (login == '') {
//   message = 'Нет логина';
// } else {
//   message = '';
// }

// let message = (login == 'Сотрудник')? return "привет" :
// login == 'Директор'? return 'Здравствуйте':
// login == '' ? return 'Нет логина' :

// ''

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Напишите условие if для проверки, что переменная age находится в диапазоне между 14 и 90 включительно.

// «Включительно» означает, что значение переменной age может быть равно 14 или 90.

// let age

// if ((age !=14 && age<14) || (age !=90 && age>90) {
//   return "внутри"
// }

// if (age<14 || age>90) {
//   return внутри
// }

// if (!(age >14 && age<90)) {
//   return внутри
// }

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// let n = 10;

// nextPrime:
//     for (let i = 2; i <= n; i++) {
//         console.log(`Это i ${i}`);

//         for (let j = 2; j < i; j++) {
//             console.log(`Это j ${j}`);
//             if (i % j == 0) continue nextPrime;
//             console.log(`Это i % j ${i % j}`);
//         }

//         console.log(`Простое число i ${i}`);
//     }

// function checkAge(age) {
//   if (age > 18) {
//     return true;
//   } else {
//     return confirm("Родители разрешили?");
//   }
// }

// function checkAge(age) {
//   return age > 18 ? true : confirm("Родители разрешили?");
// }

// function checkAge(age) {
//   return age > 18 || confirm("Родители разрешили?");
// }

// min (a,c) {
//     return Math.min(a,c)
// }
//


//https://www.codewars.com/kata/16-plus-18-equals-214

// function add(num1, num2) {
//
//     let arr1 = num1.toString().split("").reverse()
//     let arr2 = num2.toString().split("").reverse()
//     let arr3= []
//
//     for (let i=0; i< Math.max(arr1.length, arr2.length); i++) {
//         arr3.push(     (+arr1[i] || 0)     +       (+arr2[i] || 0)            )
//     }
//
//     return +arr3.reverse().join('')
//
// }
//
// console.log(add(16, 18))   //214

// function add(num1, num2) {
//     let arr1 = num1.toString().split("").reverse();
//     let arr2 = num2.toString().split("").reverse();
//
//     let arr3 =[]
//
//     for (let i=o; i< Math.max(arr1, arr2); i++) {
//         arr3.push((+arr1||0) + (+arr2||0))
//     }
//
//     return +arr3.reverse().join("")
// }


//?????????????????????????????????????????????????????????????????????????????????????????????
// function myLanguages(results) {
//
//     return Object.keys(result).filter(item=>results[item]>59).sort((a,b)=> results[a]- results[b])
// }

//----------------------------------------------------------------------------------------------------

//Given two integer arrays where the second array is a shuffled duplicate of the first array with one element missing, find the missing element.


// function sum (arr) {
//     return arr.reduce((a, b) => a + b,0);
// }
//
// function findMissing(arr1, arr2) {
//     return sum(arr1)-sum(arr2);
// }
//
// console.log(findMissing([1, 2, 3], [1, 3]))

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Write a function that returns only the decimal part of the given number.
//You only have to handle valid numbers, not Infinity, NaN, or similar. Always return a positive decimal part.

// function getDecimal(n){
//     return Math.abs(n)%1
// }

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

//Given an array/list [] of n integers , find maximum triplet sum in the array Without duplications .
// function maxTriSum(numbers){
//
//     return [...new Set(numbers)]
//         .sort((a,b)=>b-a)
//         .slice(0,3)
//         .reduce((g,d)=>g+d)
// }

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


// You are given a dictionary/hash/object containing some languages and your test results in the given languages. Return the list of languages where your test score is at least 60, in descending order of the results.
//
//     Note: the scores will always be unique (so no duplicate values)


//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// You are given a dictionary/hash/object containing some languages and your test results in the given languages. Return the list of languages where your test score is at least 60, in descending order of the results.

// function myLanguages(results) {
//     return Object.keys(results).filter(r => results[r] > 59).sort((a,b) => results[b] - results[a]);
// }


//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// Nickname Generator
//
// Write a function, nicknameGenerator that takes a string name as an argument and returns the first 3 or 4 letters as a nickname.
//
//     If the 3rd letter is a consonant, return the first 3 letters.


//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


// function maxTriSum(numbers){
//
//     let arr=[...new Set(numbers)].sort((a,b)=>b-a)
//     return arr[0]+ arr[1] +arr[2]
//
// }
//
//
//
// function maxTriSum(numbers){
//     return [...new Set(numbers)].sort((a,b)=>b-a).slice(3).reduce((sum, current)=> sum+current)
// }
//
// console.log(maxTriSum([3,2,6,8,2,3]))
// console.log(maxTriSum([2,9,13,10,5,2,9,5]))
// console.log(maxTriSum([2,1,8,0,6,4,8,6,2,4]))
// console.log(maxTriSum([-3,-27,-4,-2,-27,-2]))
// console.log(maxTriSum([-14,-12,-7,-42,-809,-14,-12]))
// console.log(maxTriSum([-13,-50,57,13,67,-13,57,108,67]))
// console.log(maxTriSum([-7,12,-7,29,-5,0,-7,0,0,29]))
// console.log(maxTriSum([-2,0,2]))
// console.log(maxTriSum([-2,-4,0,-9,2]))
// console.log(maxTriSum([-5,-1,-9,0,2]))


//____________________________________________________________________________________________________________________________________________________________


// function myLanguages(results) {
//
//   let arr= Object.keys(results)
//       return arr.map((item)=> if (item>=60) return item)
// }
//
// console.log(myLanguages({"Java" : 10, "Ruby" : 80, "Python" : 65}))


// function myLanguages(results) {
//     return Object.keys(results).filter(item => results[item]>=60)
// }
//
// console.log(myLanguages({"Java" : 10, "Ruby" : 80, "Python" : 65}))


//
// function nicknameGenerator(name){
//     let arr = name.split("")
//     if (arr[2] ===("aeiou".split(""))) {
//         return arr.slice(0,4).join("")
//     }
//     else if(arr[2] !==("aeiou".split(""))) {
//         return arr.slice(0,3).join("")
//     }
//
//     else {
//         return "Error: Name too short"
//     }
//}


// function nicknameGenerator(name){
//     if (name.length <= 3){
//         return 'Error: Name too short';
//     }
//     let vowels = ["a","e","i","o","u"];
//     if (vowels.indexOf(name[2]) !== -1){
//         return name.slice(0,4);
//     };
//     return name.slice(0,3);
// }
//
//
//
// console.log(nicknameGenerator("Jimmttty"))


// function nicknameGenerator(name){
//
//     return name.length <4 ? "Error: Name too short" : "aeiou".includes(name[2]) ? name.slice(0,4): name.slice(0,3)
// }


// function capitalizeWord(word) {
//    const nWord= word[0].toUpperCase() + word.slice(
//
//    )
// }
// console.log(capitalizeWord('word'), 'Word');
//


// function fakeBin(x){
// const newArr=x.split("").map(el=>{
//     if (el<5){
//         return 0
//     }return 1
// })
//     const newString = newArr.join("")
//     return newString
// }
//
// console.log(fakeBin("057"))


// function digits(n) {
//     return String(n).length
// }
//
// console.log(digits(6897979))

// function removeChar(str){
//     return str.substring(1, str.length-1)
//
// };
//
// console.log(removeChar('Valera'))


// function noSpace(x){
// return x.split(" ").join("")
// }
//
// console.log(noSpace("Val er   a"))

// function solution(str, ending){
// return  str.endsWith(ending)
// }
//
// console.log(solution( 'Valera Shevchenko', 'o'))

// function finalGrade(exam, projects) {
//     if (exam > 90 || projects > 10) return 100;
//     if (exam > 75 && projects >= 5) return 90;
//     if (exam > 50 && projects >= 2) return 75;
//     return 0;
// }

//
// function finalGrade(exam, projects) {
//     if (exam > 90 || projects > 10) return 100;
//     if (exam > 75 && projects >= 5) return 90;
//     if (exam > 50 && projects >= 2) return 75;
//     return 0;
// }

// function f () {
//     a=true
//     console.log(a)
// }
// f()
// console.log(a)

// let a
// typeof a ==="undefined"
// console.log(a)

// const newPost= (post, added=Date())=>({
//     ...post,
//     added,
// })
//
// const firstPost={
//     id:1,
//     name:"valerii"
// }
// const myPost = newPost(firstPost)
// console.log(myPost)  //т.к. myPost, она же то что вернула функция ===ОБЬЕКТ


// const myArray= [1,2,3]
// // console.log(myArray)
// //  const res=myArray.forEach(el=>console.log(el*2))
// // console.log(res)
// // console.log(myArray)
//
// const newArray=myArray.map(function(el){
//    return el*3
// } )
// console.log(myArray)
// console.log(newArray) //[undefined, undefined, undefined] [3,6,9]

// for (let i = 0; i < 10; i++)  {
//    setTimeout ( function ()   {
//       console.log(i);
//    } ,   1000) }

// goodsAddedToCart.reduce((acc, price)=> acc + price, 0)


// let user = { name: "Джон" };
// let admin = { name: "Админ" };
//
// function sayHi() {
//     console.log(this.name)
// }
//
// user.f=sayHi
// admin.f=sayHi
//
// //1.
// const otherFunc = user.f
// otherFunc()

//2.

// let user = {
//     name: "Джон",
//     sayHi() {
//         console.log(this.name)
//     }
// };
//
// user.sayHi()

//3.

// let user = {
//     firstName: "Вася",
//     sayHi() {
//         alert(`Привет, ${this.firstName}!`);
//     }
// };


//context
// const small = {
//     a: 1,
//     go: function(b,c,d){
//         console.log(this.a+b+c+d);
//     }
// }
// const large = {
//     a: 100
// }
//
// small.go(2,3,4);       //10
// small.go.bind(large,2,3,4)();   //109
// small.go.bind(large,2)();


/*
const small = {
    a: 1,
    go: function(b,c,d){
        console.log(this.a+b+c+d);
    }
}
const large = {
    a: 100
}
small.go(2,3,4);                // logs 1+2+3+4 => 10
const bindTest = small.go.bind(large,2)(3,4);
console.log(bindTest);    // logs => function (b,c,d){console.log(this.a+b+c+d);}
bindTest(3,4);            // logs 100+2+3+4 => 109
*/


/*
const person = {
    first: 'John',
    last: 'Smith',
    full: function() {
        console.log(this);
    }
};
person.full();

*/
// logs => Object {first: "John", last: "Smith", full: function}


/*
var person = {
    first: 'John',
    last: 'Smith',
    full: function() {
        console.log(this.first + ' ' + this.last);
    },
    personTwo: {
        first: 'Allison',
        last: 'Jones',
        full: function() {
            console.log(this.first + ' ' + this.last);
        }
    }
};

person.full();
// logs => 'John Smith'
person.personTwo.full();
// logs => 'Allison Jones'

*/

/*
const gVar = 5;

console.log(window.gVar); // 5 (становится свойством глобального объекта)*/


/*
class User{
    constructor(name){
        this.name = name;
    }
    sayHi(){
        console.log(this.name);
    }
}

console.log(typeof User)

const user1 = new User("Valerii");
user1.sayHi();
*/

// function mergeArrays(arr1, arr2) {
//     return [...new Set([...arr1, ...arr2])].sort((a,b)=>a-b)
// }
//
// console.log(mergeArrays([1,3,5,7,9], [1,1, 0,8,6,4,2]))


// function add(num1, num2) {
//     const arr1=String(num1).split("")
//     const arr2=String(num2).split("")
//     const arr3=[]
//
//     for (let i=0; i<(arr1.length<arr2.length ? arr2.length : arr1.length); i++) {
//         arr3.push(parseInt(arr1[i]||0)+parseInt(arr2[i]||0))
//     }
//     return parseInt(arr3.join(""))
// }
//
// console.log(add(2, 19))


//const str = 'The quick brown fox jumps over the lazy dog.';


/*
console.log ('Starting');
let image;

fetch('coffee.jpg').then((response) => {
    console.log('It worked :)')
    return response.blob();
}).then((myBlob) => {
    let objectURL = URL.createObjectURL(myBlob);
    image = document.createElement('img');
    image.src = objectURL;
    document.body.appendChild(image);
}).catch((error) => {
    console.log('There has been a problem with your fetch operation: ' + error.message);
});

console.log ('All done!');
*/


/*
const makePizza = function (title, cb) {
    console.log(`Заказ на приготовление пиццы «${title}» получен. Начинаем готовить…`);
    setTimeout(cb, 3000);
}

const readBook = function () {
    console.log('Читаю книгу «Колдун и кристалл»…');
}

const eatPizza = function () {
    console.log('Ура! Пицца готова, пора подкрепиться.');
}

makePizza('Пеперонни', eatPizza);
readBook();*/

//callback

/*
function doHomework(subject, callback) {
    console.log(`Starting my ${subject} homework.`);
    callback();
}

doHomework('math', function() {
   console.log('Finished my homework');
});
*/


/*
function doHomework(subject, callback) {
    alert(`Starting my ${subject} homework.`);
    callback();
}
function alertFinished(){
    alert('Finished my homework');
}
doHomework('math', alertFinished);
*/


/*function add(num1, num2) {
    let arr1 = num1.toString().split('')
    let arr2 = num2.toString().split('')
    let arr3 = []
    for(let i=0; i < (arr1.length < arr2.length ? arr2.length : arr1.length); i++) {
        arr3.push((parseInt(arr1[i]) || 0) + (parseInt(arr2[i]) || 0))
    }

    return parseInt(arr3.join(''));
}
console.log(add(12, 19))*/

/*
const person= {
    age:20
}
console.log(!undefined===true) //true

if(!person.name) {
    console.log("Имя не указано")
}*/

/*

const value=11

const newNum = value ? console.log("истинно") : console.log("ложно")

console.log(newNum)*/


/*
const value1 = 11
const value2 = 15

value1 && value2
    ? myFunc(value1, value2)
    : func()*/

/*
let a= 10
console.log( a>=0 ? a : -a) //10

a=-5
const res =  a>=0 ? a : -a
console.log(res) //5*/


/*
// https://www.codewars.com/kata/5effa412233ac3002a9e471d/train/javascript
function add(num1, num2) {
    const arr1 = num1.toString().split("").reverse();
    const arr2 = num2.toString().split("").reverse();
    const arr3=[];

    for (let i=0; i<(arr1.length<arr2.length ? arr2.length : arr1.length); i++) {
        arr3.push((parseInt(arr1[i])||0) + (parseInt(arr2[i])||0));
    }
    return parseInt(arr3.reverse().join(""));
}

console.log(add(19,2))
*/


/*
var questions = [{
    question: "What's the currency of the USA?",
    choices: ["US dollar", "Ruble", "Horses", "Gold"],
    corAnswer: 0
}, {
    question: "Where was the American Declaration of Independence signed?",
    choices: ["Philadelphia", "At the bottom", "Frankie's Pub", "China"],
    corAnswer: 0
}];

//1
const newArr= questions.map((obj)=>({...obj, userAnswer:null}))
console.log(newArr)
//2
questions.forEach(function(elem){return elem.userAnswer=null})
console.log(questions)
*/

// questions.forEach(function (i) {
//     i.usersAnswer = null;
// });


/*

//5555555555555555555555555555555555555555555555555555555555555555555555


//https://www.codewars.com/kata/colour-association

const entries = [
    ['foo', 'bar'],
    ['baz', 42]
];

const  colourAssociation = (array) =>
    array.map((eachArray)=> {
            let newObj={};
            newObj[eachArray[0]] = eachArray[1]
            return newObj
        }
    )
console.log(colourAssociation(entries))
*/


/*
function combine(obj1, obj2) {
   let mergedObj= Object.assign({}, obj1, obj2);
   return mergedObj
}

const objA = { a: 10, b: 20, c: 30 }
const objB = { a: 3, c: 6, d: 3 }


console.log(combine(objA, objB))

*/


/*
function colourAssociation(array){
   return array.map((eachArr)=> {
           const newObj ={}
           newObj[eachArr[0]]=eachArr[1]
           return  newObj
   })
}

const entries = [
    ['foo', 'bar'],
    ['baz', 42]
];

console.log(colourAssociation(entries))*/


/*

function run() { console.log(foo); // undefined
    var foo = "Foo";
    console.log(foo); // Foo
}
run();*/


// const objA = { a: 10, b: 20, c: 30 }
// const objB = { a: 3, c: 6, d: 3 }

/*
const combine =(a, b)=> {

    console.log(arguments[0], arguments[1])
}

combine("a","b" )*/


//--------------------------------------------------------------------------------------------


//--------https://www.codewars.com/kata/56bd9e4b0d0b64eaf5000819/train/javascript-------------------

/* //trening
function test () {

    console.log(arguments[0], arguments[1], arguments[2], arguments[3]); // 'a', 'b'
    const newArray= [ ...arguments]
    console.log(newArray);
    console.log(arguments[0])
}
test({a:"1",b:"3", c:"5" }, 'b', 5, {a:5 ,b:"20", c:"Valera" }, );
*/


//  { a: '1', b: '3', c: '5' } b 5 { a: '10', b: '20', c: '30' }
//    [ { a: '1', b: '3', c: '5' }, 'b', 5, { a: '10', b: '20', c: '30' } ]

//-------------------------------------------------------------------------
/* //v1
function combine() {
    var obj = {}

    for (var i = 0; i < arguments.length; i++) {
        for (var key in arguments[i]) {
            console.log( arguments[i][key])
            obj[key] = obj[key] ? obj[key] + arguments[i][key]: arguments[i][key]
        }
    }

    return obj;
}
*/


/* v2
function combine() {
    var obj = {}

    for (var i = 0; i < arguments.length; i++) {
        Object.keys(arguments[i]).forEach ((elem)=>{
            obj[elem] = obj[elem] ? obj[elem] + arguments[i][elem]: arguments[i][elem]
        })
    }

    return obj;
}*/






////--------https://www.codewars.com/kata/56bd9e4b0d0b64eaf5000819/train/javascript-------------------
//1. create new object
//2. [...arguments]
//3. перебрать массив обьектов(аргументов) - for (i<arguments.length)
//4 перебрать каждый обект внутри массива или взять ключи обьекта и тоже перебрать forEach
//5. условие: если obj[elem] true => obj[elem]+= arguments[i][elem];
//                                   obj[elem] = arguments[i][elem]


/*

//final practice
function combine() {
    const obj={}
    for(let i=0; i<arguments.length; i++){
        for(let key in arguments[i]) {
            if(obj[key]) {
                obj[key] += arguments[i][key];
            } else {
                obj[key] = arguments[i][key]
            }
        }
    }
    return obj
}

const objA = {a: 10, b: 20, c: 30}
const objB = {a: 3, c: 6, d: 3}
const objC = {a: 5, d: 11, e: 8}
const objD = {c: 3}

console.log(combine(objA, objB))
*/



//---------------------------------------------------------------------

/*class Comment {
    constructor(text){
        this.text = text
        this.votesQty=0
    }
    upvote() {
      return  this.votesQty +=1
    }
}

const firstComment=new Comment("Valera")
const secondComment=new Comment("Vika")
const thirdComment=new Comment("Sophia")
console.log(firstComment.upvote())
console.log(firstComment.upvote())
console.log(secondComment.upvote())
console.log(thirdComment.upvote())*/




////--------https://www.codewars.com/kata/56bd9e4b0d0b64eaf5000819/train/javascript-------------------
//1. create new object
//2. [...arguments]
//3. перебрать массив обьектов(аргументов) - for (i<arguments.length)
//4 перебрать каждый обект внутри массива или взять ключи обьекта и тоже перебрать forEach
//5. условие: если obj[elem] true => obj[elem]+= arguments[i][elem];
//                                   obj[elem] = arguments[i][elem]



/*

function combine() {
    const newObj={}

    for(let i=0; i<arguments.length; i++) {
        Object.keys(arguments[i]).forEach((el)=>{
                newObj[el]= !!newObj[el] ? newObj[el] + arguments[i][el] : arguments[i][el]
        })
    }
    return newObj
}

const objA = {a: 10, b: 20, c: 30}
const objB = {a: 3, c: 6, d: 3}
const objC = {a: 5, d: 11, e: 8}
const objD = {a:2}

console.log(combine(objA, objB))
console.log(combine(objC, objD))*/

//----------------------------------------



/*
You are given a number "n" (n >= 0) and a digit "d" (0 <= d <= 9).

    Write a function nbDig(n, d) that finds the square of each integer from 0 to n, and returns the number of times that the digit d appears across all the squares. Note that d might appear multiple times in a single square.

    Example:

n=12, d=1
Squares from 0 to n=12: 0, 1, 4, 9, 16, 25, 36, 49, 64, 81, 100, 121, 144
The function returns 7 because the digit d=1 appears 7 times: in 1, 16, 81, 100, 121 (note: 1 appears twice in 121), and 144.

n=10, d=0
Squares from 0 to n=10: 0, 1, 4, 9, 16, 25, 36, 49, 64, 81, 100
The function returns 3 because the digit d=0 appears 3 times: in 0 and 100 (note: 0 appears twice in 100).
*/

/*
https://www.codewars.com/kata/566fc12495810954b1000030/train/javascript

function nbDig(n, d) {
    var a= '';
    for(var i = 0; i <= n; i++){
        a= a + Math.pow(i, 2);
    }
    //console.log("a:", a)  //014916

    const arr =a.split(d) //[ '0', '49', '6' ]
    console.log(arr)
    return arr.length-1     //2
}

console.log(nbDig(4, 1))*/


//--------------------------------------------------------------------------------



//algo
//создаем  пустую строку
// цикл по всем числам n включительно
// в новую строку добавляем  квадраты всех элементов
//разбиваем все числа нашей строки в массив по нашей цифре d
// берем длинну массива - 1, что и является количеством повторений d

/*
function nbDig(n, d) {
    let newStr=''
    for (let i = 0; i <= n; i++) {
      newStr= newStr+ Math.pow(i, 2)
    }

    return newStr.split(d).length-1
}

console.log(nbDig(4, 1)) //2

*/

//--------------------------------------------------------------------------------


//https://www.codewars.com/kata/5a5915b8d39ec5aa18000030/train/javascript

//algo
//1. получить сумму всех элементов первого массива
//2. получить сумму всех элементов второго массива
//3. отнять значение первого массива от второго

/*
function findMissing(arr1, arr2) {
    const reduced1 = arr1.reduce((a, b) => a + b,0);
    const reduced2 = arr2.reduce((a, b) => a + b,0);
    return reduced1-reduced2
}
*/


//--------------------------------------------------------------------------------

//https://www.codewars.com/kata/get-decimal-part-of-the-given-number
//algo
// абсолюное число
// вычесть наше число от числа, округленного вниз


/*
function getDecimal(n){
    const absolutes = Math.abs(n)

    return absolutes- Math.floor(absolutes)
}

console.log(getDecimal(4.5))
*/

//--------------------------------------------------------------------------------

//https://www.codewars.com/kata/maximum-triplet-sum-array-series-number-7

//algo
//1. sort по убыванию
//2. new Set -> новый Set обьект {} ===Set(4) { 8, 6, 3, 2 }
//3. деструктурируем обьект в массив [...new Set()]
//3. первые 3 максимальных числа

/*
function maxTriSum(numbers){
    const sorted =[...new Set(numbers.sort((a,b)=>b-a))]
    console.log(sorted)
  // return sorted[0]+ sorted[1]+sorted[2]
}
console.log(maxTriSum([3,2,6,8,8,2,3]))
*/

//--------------------------------------------------------------------------------
//algo
// array keys and sum 1 of diary
// array keys and sum 2 of diary
// array keys and sum 3 of diary
//if-els

/*
function whoseBicycle(diary1, diary2, diary3) {
    const result1 =Object.values(diary1).reduce((a,b)=>a+b)
    const result2 =Object.values(diary2).reduce((a,b)=>a+b)
    const result3 =Object.values(diary3).reduce((a,b)=>a+b)
    if (result1>=result2 && result1 >result3) {
        return 'I need to buy a bicycle for my first son.'
    } else if (result2>result1 && result2 >result3) {
        return 'I need to buy a bicycle for my second son.'
    } else if (result3>=result1 && result3 >=result2)
    {
        return 'I need to buy a bicycle for my third son.'
    }
}

console.log(whoseBicycle(
    {
        'algebra': 6,
        'history': 7,
        'physics': 8,
        'geography': 9,
        'chemistry': 10
    },
    {
        'algebra': 8,
        'history': 7,
        'physics': 8,
        'geography': 9,
        'chemistry': 10
    },
    {
        'algebra': 6,
        'history': 5,
        'physics': 5,
        'geography': 9,
        'chemistry': 10
    }
))*/

//---------------------------------------------------------
//https://www.codewars.com/kata/nickname-generator

//1.includes для строки (включат ли эта строка главных 3-ю букву из слова
//2. если да обрезать 4 буквы, если нет, то 3 буквы
//3/ длинна меньше 4, ничего

/*
function nicknameGenerator(name){
    if(name.length<4) return 'Error: Name too short'
    return "aeiou".includes(name[2]) ? name.slice(0,4) : name.slice(0,3)

}
console.log(nicknameGenerator("Jimmy"))*/



/*function two(){
    let a;
    console.log(a);
}
function one(){
     let a=2;
    console.log(a);
    two();
}
let a=1;
console.log(a);
one();*/


//---------------------------------------------------------
//https://stackoverflow.com/questions/5767325/how-can-i-remove-a-specific-item-from-an-array

/*var value = 3

var arr = [1, 2, 3, 4, 5, 3]

const newArr=arr.filter(el=> ![value].includes(el))
console.log(newArr)*/

// var value = 3
//
// var arr = [1, 2, 3, 4, 5, 3]
//
// const newArr=arr.filter(el=> ![el].includes(value))
// console.log(newArr)



/*
let forDeletion = [2, 3, 5]

let arr = [1, 2, 3, 4, 5, 3]

const myArr = arr.filter(item=>{
    return !forDeletion.includes(item)
})

console.log(myArr)*/

// function func() {
//     console.log(typeof arguments)
// }
//
// func()


// const heroes = ['Batman', 'Superman'];
// const villains = ['Joker', 'Bane'];
// heroes.push(...villains);
// //heroes; // ['Batman', 'Superman', 'Joker', 'Bane']
// console.log(heroes)


// const object1 = {
//     a: 'somestring',
//     b: 42,
//     c: false
// };
//
// console.log(Object.keys(object1));


// const data = { PropertyA: 1, PropertyB: 2, PropertyC: 3 };
// data["PropertyD"] = 4;
// data.PropertyE = 5;
// console.log(data)


// let name = "John";
//
// function sayHi() {
//     console.log("Hi, " + name);
// }
//
// name = "Pete";
// console.log(sayHi())


// a=10
//
// var a

/*
"use strict"
function f1(){
    return this;
}

console.log(f1()) //undefined
*/



/*
function f1(){
    return this;
}

console.log(f1()) //window
*/


/*
let user = {
    name: "John",
    hi(){console.log(`Hello, ${this.name}`) }
}

setTimeout(user.hi.bind(user), 1000)
*/

// let user = {
//     name: "John",
//     hi(){console.log(`Hello, ${this.name}`) }
// }
//
// setTimeout(()=>{user.hi()}, 1000)




//setTimeout(user.hi, 1000) //Hello, undefined
//
// let sayHi=user.hi.bind(user)
// setTimeout(sayHi, 1000) //Hello, John


/*
const str = 'Life, the universe and everything. Answer:';
console.log(str.length)*/


/*
function maxTriSum(numbers){
   return [...new Set(numbers)].sort((a,b)=>b-a).slice(0,4).reduce((c,d)=>(c+d))
}
console.log(maxTriSum([4, 3, 10,1]))

*/


//algo
// содержится ли в строке гласных "aeiou"  3-я буква нашего слова
// содержится ли 3-я буква нашего слова в строке гласных "aeiou"

/*
function nicknameGenerator(name){
    if(name.length<4) {return "Error: Name too short"}
   if ("aeiou".includes(name[2])) {
       return name.slice(0,4)
   } return name.slice(0,4)

}

console.log(nicknameGenerator("Greagory"))*/

//найти четные, нечетные
//записать в строку, разделив пробелом

/*function sortMyString(S) {
let odd=[]
    let even=[]
for (let i=0; i<S.length; i++) {
    if (i%2===0) {
        odd.push(S[i])
    } else {
        even.push(S[i])
    }
}
    return odd.join("") + " " + even.join("")
}*/



/*
function sortMyString(S) {
    let even=S.split("").filter((el, i)=>i%2===0).join("")
    let odd=S.split("").filter((el, i)=>i%2==1).join("")

return even + " " + odd
}

console.log(sortMyString("CodeWars"))
*/

// function pow(x, n) {
//     let result = 1;
//
//     // умножаем result на x n раз в цикле
//     for (let i = 0; i < n; i++) {
//         console.log(i) //0,1,2,3
//         result=result* x;  //(2)  (2*2) (2*2*2) (2*2*2*2)
//     }
//
//     return result;
// }

/*
function  isPowerOfTwo(n) {
    if(n===1) return true
    if(n<1) return false
    if(n>1) return isPowerOfTwo(n/2)
}

console.log(isPowerOfTwo(4096))
*/

//
// let user = {
//     name:"Valerii",
//     sayHi() {
//         console.log(this.name)
//     }
// };
//
//
// console.log(user.sayHi());


/*
let user = {
    firstName: "Вася",
    sayHi() {
        alert(`Привет, ${this.firstName}!`);
    }
};

let sayHi = user.sayHi


setTimeout(sayHi, 1000);
*/



/*let list = [
    {'4': 'dog' }, {'2': 'took'}, {'3': 'his'},
    {'-2': 'Vatsan'}, {'5': 'for'}, {'6': 'a'}, {'12': 'spin'}
]


const sentence=(list)=>{
    return list.sort((a,b)=>Object.keys(a) -Object.keys(b)).map((elem)=>Object.values(elem)).join(" ")
}


console.log(sentence(list))*/


/*function spread(func, args) {
    return func(...args)
}

console.log(spread(someFunction, [1, true, "Foo", "bar"] ) */)
