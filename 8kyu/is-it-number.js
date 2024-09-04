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



/*const up = 3
const down = 2
const totalDistance = 5

const snail=()=> {
    let days=0
    let realDistance = 0;
    do {
        days++;
        realDistance +=up;

       if(realDistance>=totalDistance) {
           return days
       }else {
           realDistance-=down
       }

    } while (realDistance<totalDistance);
}

console.log(snail())*/




//Task 4
/*
const getDrink =(name, age)=>{
    if(age<21) return `Возьмите стакан сока ${name}`;
    else if(age>=21 && age<80) return `Могу предложить бокал вина ${name}`;
    else if(age>=80) return `Может кефир ${name}`;
}

console.log(getDrink("Mike",18))
*/


//Task 5


/*let coffee //Americano, Cappuccino
let size //sm ,md, lg

const getCoffee = (coffee, size)=>{
   let price // ....рассчитываем в функции
   let americanoRecipe ='milk/coffee/water'
   let cappuccinoRecipe ='whippedMilk/coffee/water'
   let recipe=null;

   coffee==="Americano" ? recipe = americanoRecipe : recipe = cappuccinoRecipe;

   if (coffee==="Americano" && size==="sm") return ` Вы выбрали ${coffee}, цена ${price}, рецепт ${recipe}`;
   else if (coffee==="Americano" && size==="md") return ` Вы выбрали ${coffee}, цена ${price}, рецепт ${recipe}`;
   else if (coffee==="Americano" && size==="lg") return ` Вы выбрали ${coffee}, цена ${price}, рецепт ${recipe}`;
   else if (coffee==="Cappuccino" && size==="sm") return ` Вы выбрали ${coffee}, цена ${price}, рецепт ${recipe}`;
   else if (coffee==="Cappuccino" && size==="md") return ` Вы выбрали ${coffee}, цена ${price},рецепт ${recipe}`;
   else if (coffee==="Cappuccino" && size==="lg") return ` Вы выбрали ${coffee}, цена ${price},рецепт ${recipe}`;
}

console.log(getCoffee(coffee, size))*/
