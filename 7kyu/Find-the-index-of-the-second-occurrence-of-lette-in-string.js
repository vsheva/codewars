function secondSymbol(s, symbol) {
    // let count = 0;
    //
    // for (let i = 0; i < s.length; i++) {
    //     if (s[i] === symbol) {
    //         count = count + 1;
    //     }
    //     if (count >= 2) return i;
    // }
    //
    // return -1

    return s.indexOf(symbol, s.indexOf(symbol) + 1)
}

console.log(secondSymbol('Helllo world!!!', 'l'))
