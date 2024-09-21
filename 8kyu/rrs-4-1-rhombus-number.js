let result = "";

for (let str = 10; str >= 1; str--) {
    for (let space = 1; space < str; space++) {
        result += "_"
    }

    let start = str
    for (let i = str; i <= 10; i++) {
        result += start;
        start+=(10-i)
    }

    for (let star = str; star < 10; star++) {
        result += "*"
    }

    result = result + "\n"
}


for (let str = 9; str >= 1; str--) {
    for (let space = str; space <= 9; space++) {
        result += "_"
    }

    for (let star = 1; star <= str; star++) {
        result += "*"
    }

    for (let star = 1; star < str; star++) {
        result += "*"
    }

    result = result + "\n"
}


console.log(result)
