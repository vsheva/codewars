function stray(numbers) {
    //return numbers.filter(el => numbers[0] !== el)[0]
    //return numbers.sort((a, b) => a - b).filter(el => numbers[0] !== el)[0]
    numbers.sort((a, b) => a - b);

    if (numbers[0] !== numbers[1]) {
        return numbers[0]
    }
    return numbers[numbers.length - 1]
}

console.log(stray([1, 3, 1]))
