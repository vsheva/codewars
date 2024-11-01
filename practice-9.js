/*
function Person(name, age) {
    this.name = name;
    this.age = age;
    this.sayHello = function () {
        console.log(`Hello, my name is ${this.name}`);
    }
}

let user = new Person("bob", 20);

const person2 = {
    name: "vivek",
    age: 18,
    sayHello: function () {
        console.log("Hello")
    }
}

person2.sayHello()

class Person1 {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    sayHi() {
        console.log("Hello, hello")
    }
}
*/


function Person(name, age) {
    this.name = name;
    this.age = age;
    this.sayHello = function () {
        console.log(`Hello, my name is ${this.name}`);
    }
}

let user = new Person("bob", 20);


Person.prototype.sayBye = function () {
    console.log("Bye")
}

user.sayBye();
user.sayHello();


// class Person1 {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
//     sayHello() {
//         console.log(`Hello, my name is ${this.name}`);
//     }
// }
// let user1 = new Person1("jane", 19);
// user1.sayHello();


const person2 = {
    name: 'vivek',
    age: 18,
    sayHello: function () {
        console.log(`Hello, my name is ${this.name}`);
    }
}

person2.sayHello();
