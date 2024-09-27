function secondSymbol(s, symbol) {
    return s.indexOf(symbol, s.indexOf(symbol)+1)
}

console.log(secondSymbol('Hello world!!!','l'))
