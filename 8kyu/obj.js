/*
var objNew = { name: 'akshay' }
//console.log(objNew.name)
function sayHello () {
    return 'Hello ' + this.name1
}
//console.log(sayHello.call(objNew));
console.log(sayHello.call({name1: "John"}))
*/



let person = {
    age: 23,
    getAge: function () {
        return this.age
    }
}
let person2 = { age: 54 };
console.log(person.getAge.call(person2))
