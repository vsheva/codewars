// 12345
// 1234
// 123
// 12
// 1


let result =""

for (let i = 5; i >=1; i--) {
    for (let j = 1; j<=i; j++) {
     result +=j
    }
    result +="\n"
}
console.log(result)
