// function squareSum(numbers) {
//   let item = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     item += Math.pow(numbers[i], 2);
//   }
//   return item;
// }
//
// console.log(squareSum([1, 2, 4]));

//
// let carmodel= "car"
// let num =2
// obj[carmodel]=''


//создаем объект
// const obj = {};
// //console.log(obj)
// //присваиваем значения
// obj.name = 'Jess'; //через точку arr[0]= "jess"
// // console.log(obj);
// obj['likes read'] = true; //через скобки []
// //console.log(obj.read);
// obj['age'] = 28;
// //console.log(obj);


/*
const obj = {};

let carModel = 'car'; //через переменную
let name ="volvo"
let num = 2
//obj.carModel="volvo"; // carModel: 'volvo'
obj[carModel] = name; //ПЕРЕДАЕМ ПЕРЕМЕННУЮ В КЛЮЧ !!!!        carModel("car"):name("volvo")
obj[carModel] = 5;
obj['carModel'] = num;
console.log(obj); //{ car: 'volvo', carModel: 2 }
*/


// let name1= "Anna"
// let age= 17
// const myPerson = {
//   [name1]: name1,
//   [age]: age
// }
//
// console.log(myPerson)


let obj={
  name1: "John",
  age: 17
}

for (let key in obj) {
  console.log(obj[key])
}
