// ❓ DESCRIPTION:
//     Create a method sayHello/say_hello/SayHello that takes as input a name, city, and state to welcome a person. Note that name will be an array consisting of one or more values that should be joined together with one space between each, and the length of the name array in test cases will vary.
//
//     Example:
//
// sayHello(['John', 'Smith'], 'Phoenix', 'Arizona')
// This example will return the string Hello, John Smith! Welcome to Phoenix, Arizona!

// ✅ Solution 1:


// function sayHello( name, city, state ) {
//     for(let i = 0; i < name.length; i++) {
//        name= name.toString().replace(",", " ")
//     }
//     return `Hello, ${name}! Welcome to ${city}, ${state}!`
// }
//
// console.log(sayHello(['Franklin','Delano','Roosevelt',"Jr."], 'Chicago', 'Illinois'))


function sayHello( name, city, state ) {
    name= name.join(" ")
    return `Hello, ${name}! Welcome to ${city}, ${state}!`
}

console.log(sayHello(['Franklin','Delano','Roosevelt',"Jr."], 'Chicago', 'Illinois'))