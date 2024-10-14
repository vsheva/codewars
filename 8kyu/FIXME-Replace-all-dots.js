var replaceDots = function (str) {
    // let res = '';
    // for (let i = 0; i < str.length; i++) {
    //     res += (str[i] === '.') ? "-" : str[i]
    // }
    // return res;
    return str.split("").map((el) => el === "." ? "-" : el).join("")
}

console.log(replaceDots("one.two.three"));
