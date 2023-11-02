// Filter the number
// Oh, no! The number has been mixed up with the text. Your goal is to retrieve the number from the text, can you return the number back to its original state?
//
//     Task
//     Your task is to return a number from a string.
//
//     Details
// You will be given a string of numbers and letters mixed up, you have to return all the numbers in that string in the order they occur.

// 1
/*
let filterString = function(value) {
    const array = value.split()
        console.log(array)

  const result= array.map((el)=>{
       return el.replace(/\D/gi, '')
       })

    return +result.join()

}
console.log(filterString("a1b2c3"))*/


//2

/*
let filterString = function(value) {
       return value.replace(/\D/gi, '')
    }

console.log(filterString("a1b2c3"))
*/

//3

let filterString = function(value) {
    const number= value.split("").filter(el=>!isNaN(el)).join("")
    console.log(number)
    return +number
}

console.log(filterString("a1b2c3"))