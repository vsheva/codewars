let result = "";
//верх
for (let str = 10; str > 1; str--) {
    for (let space = 1; space < str; space++) {
        result += " " //space "_"
    }

    let start = 1
    for (let i = str; i <= 10; i++) {
        result += start;
        start++;
    }

    let start2 = 1
    let row = [];
    for (let star = str; star < 10; star++) {
        row.push(start2)
        //result += start2;
        start2++;
    }
    result += row.reverse().join('') + "\n"
}


//середина
for (let i = 1; i <= 10; i++) {
    if (i === 10) {
        result += 0
        break;
    }
    result += i;
}

let arr = []
for (let i = 1; i <= 9; i++) {
    arr.push(i)
    //result += i;
}
result += arr.reverse().join('') + "\n";


//низ
for (let str = 9; str >= 1; str--) {
    for (let space = str; space <= 9; space++) {
        result += " " //space "_"
    }

    for (let m = 1; m <= str; m++) {
        result += m;
    }

    let row = []
    for (let n = 1; n < str; n++) {
        row.push(n)
        //result += n
    }
    result += row.reverse().join('') + "\n"
}

console.log(result)
