let calculate = function calculate(a, o, b) {
    let result = 0;

    if (o === "+") {

        return result = a + b
    } else if (o === "-") {
        return result = a - b;
    } else if (o === "/" && b !== 0) {
        return result = a / b
    } else if (o === "*") {
        return result = a * b;
    } else return null


}

console.log(calculate(2, "j", 4))
