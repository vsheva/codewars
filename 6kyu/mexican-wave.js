//https://www.codewars.com/kata/58f5c63f1e26ecda7e000029/train/javascript

//перебираем строку
// добавляем в массив начало + заглавную + конец
// если пустое (пробел в строек- то пропустить перебор и continue)
//

//Task
// function wave(str){
//     let newArr =[]
//
//     for (let i=0; i<str.length; i++) {
//         let letter =str[i];
//         let beg= str.slice(0,i)
//         let cap = letter.toUpperCase()
//         let end = str.slice(i+1)
//
//        if (str[i]=== " ")
//        {
//            continue
//        }
//        else {newArr.push(beg+cap+end)}
//
//
//     }
//     return newArr
//
// }
//
// console.log(wave("two words"))



// let month= "sfa";
//  switch (month) {
//      case 'december':
//      case 'january':
//      case 'february':
//          console.log(`${month}: winter`);
//          break;
//      case 'march':
//      case 'april':
//      case 'may':
//          console.log(`${month}: spring`);
//          break;
//      case 'june':
//      case 'july':
//      case 'august':
//          console.log(`${month}: summer`);
//          break;
//      case 'september':
//      case 'october':
//      case 'november':
//          console.log(`${month}: autumn`);
//          break;
//      default:
//          console.log(`write correct month`);
//  }



//Task1
/*
const calculator= (x,y, operator)=>{
    if(isNaN(x) || isNaN(y)) {
        console.log("Введите число")
        return
    }

    let result
    switch(operator) {
        case '+': result =x+y;
        break;

        case '-': result =x-y;
            break;
        case '*': result =x*y;
            break;

        case '/':
            if(y===0) {
                console.log("Делить на ноль нельзя")
                return;
            }

            result=x/y;
            break;
        default:
            console.log( "Введите правильный оператор" );
    }
return result

}

console.log(calculator(5, 0, "/"))

*/


//Task 2
//При помощи цикла for выведите чётные числа от 2 до 10

// for(let i = 2; i <=10; i++) {
//     if(i%2==0) console.log(i)
// }

//Task 3
// Задача с интервью*
// У вас есть массив со скобками, предположим
//     [ ‘(‘, ‘)’, ‘(‘, ‘)’, ‘)’] . Количество элементов и последовательность может быть разной.
//     Нужно выяснить, равно ли количество открывающих и закрывающих скобок одного типа (последовательность не так важна, но если решите и это, то супер)
//

//Task4
//Нужно выяснить, равно ли количество открывающих и
// закрывающих скобок одного типа (последовательность не так важна, но если решите и это, то супер)


const arr=['(', ')', '(', ')', ')', '(',];
const left=[]
const right=[]

for( let i=0; i<arr.length; i++ ) {
    if (arr[i]==="(") left.push(arr[i]);
    else  right.push(arr[i])
}
left.length===right.length ? console.log("ravno") : console.log("ne ravno")


//Taks 5

/*const height=5
let up=3
let down=2
let totalDistance=0
let totalDays=0

const snailMove = ()=>{

    totalDays++;
    totalDistance+=up;

    if(totalDistance>=height) console.log(`Snail reached ${totalDistance}m for ${totalDays} days`);
    else {
        totalDistance -= down;
        console.log(`Snail reached ${totalDistance}m for ${totalDays} days`)
    }

    totalDays++;
    totalDistance+=up;

    if(totalDistance>=height) console.log(`Snail reached  ${totalDistance}m  for ${totalDays} days`);
    else {
        totalDistance -= down;
        console.log(`Snail reached ${totalDistance}m for ${totalDays} days`)
    }

    totalDays++;
    totalDistance+=up;

    if(totalDistance>=height) console.log(`Snail reached ${totalDistance}m for ${totalDays} days`);
    else {
        totalDistance -= down;
        console.log(`Snail reached  ${totalDistance}m for ${totalDays} days`)
    }

}

console.log(snailMove())*/


/*
const height=5
const up=3
const down=2
let totalDistance=0

const snailMove = function() {
    for (let totalDays=1; totalDistance<height; totalDays+=1) {
        totalDistance+=up;

        if(totalDistance>=height) {
         console.log(`Snail reached the top for ${totalDays} days `)
            return;
        } else{
            totalDistance-=down;
            console.log(`Snail reached the top for ${totalDays} days `)
        }
    }
}

console.log(snailMove())
*/

//Task6


// const decoder=(str)=> {
//     let str2=''
//
//     for(let i=0; i<str.length; i+=3) {
//         str2=str2+ str[i]
//     }
//   return str2;
// }
//
// console.log(decoder('Ybrobrubr brabrrbrebr brtbrhbrebr brbbrebrsbrtbr brQbrAbr brebrvbrebrrbr'))
