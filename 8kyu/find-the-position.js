//https://www.codewars.com/kata/5808e2006b65bff35500008f/train/javascript

function position(letter){
let alphabeth = "abcdefghijklmnopqrstuvwxyz"
    return 'Position of alphabet: '+ ((alphabeth.indexOf(letter))+1)
}

console.log(position("a"))
