//https://www.codewars.com/kata/57126304cdbf63c6770012bd/train/javascript

// function isDigit(s) {
//     return s== parseFloat(s) // +s== parseFloat(s)
// }
//
// console.log(isDigit("0.0314E+2 "))


// let arr= [1,2,3]
// console.log(...arr)

// let arr= 'Roma'; //R o m a
// console.log(...arr);

// let str= 'Roma';
// console.log([...str]); //['R', 'o', 'm', 'a']


// let arr= [1, 2]
// console.log( arr.indexOf(3)!==-1);


//Task 1

// const getVacation=(month)=> month === "July" || month=== "August" ? "approved" :"denied"
// console.log(getVacation("dasfcs"))



////Task 2
/*
const calculator =(num1, num2, operator)=>{
    if (isNaN(num1) || isNaN(num2)) {
        return ("Please enter valid number");
    }

    if(operator ==="+") return num1+num2;
    else if(operator ==="-") return num1-num2;
    else if(operator ==="*") return num1*num2;
    else if(operator ==="/") return num1/num2;
    else return "Please enter correct operator: '+', '-', '*', '/' ";
}

//console.log(calculator(5,"a", "*"))
console.log(calculator(5,10, "%"))
//console.log(calculator(5,10, "*"))
*/


//Task 3


const up = 3
const down = 2
const totalDistance = 5

const snail=()=> {
    let days=0
    let realDistance = 0;
    do {
        days++;
        realDistance +=up;
       if(realDistance<totalDistance) {
           realDistance-=down
       }else return days

    } while (realDistance<totalDistance);
}

console.log(snail())



// while(realDistance< totalDistance) {
//     realDistance += upDistance
//     days++;
//
//     if(realDistance < totalDistance ) {
//         realDistance -= downDistance
//     }
//     else if(realDistance >= totalDistance ) {
//     return days
//     }
// }



// for (let days =1; realDistance<totalDistance; days++){
//     realDistance += upDistance;
//     if(realDistance < totalDistance ) realDistance -= downDistance
//     else if(realDistance >= totalDistance ) return days
// }

