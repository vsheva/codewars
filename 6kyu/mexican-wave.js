//https://www.codewars.com/kata/58f5c63f1e26ecda7e000029/train/javascript

//перебираем строку
// добавляем в массив начало + заглавную + конец
// если пустое (пробел в строек- то пропустить перебор и continue)

function wave(str){
    let newArr =[]

    for (let i=0; i<str.length; i++) {
        let letter =str[i];
        let beg= str.slice(0,i)
        let cap = letter.toUpperCase()
        let end = str.slice(i+1)

       if (str[i]=== " ")
       {
           continue
       }
       else {newArr.push(beg+cap+end)}


    }
    return newArr

}

console.log(wave("two words"))
