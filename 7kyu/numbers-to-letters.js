function switcher(x) {
    //let alphabet = ' ?!ABCDEFGHIJKLMNOPQRSTUVWXYZ'.toLowerCase().split("").reverse()
    let alphabet = [
        'z', 'y', 'x', 'w', 'v', 'u',
        't', 's', 'r', 'q', 'p', 'o',
        'n', 'm', 'l', 'k', 'j', 'i',
        'h', 'g', 'f', 'e', 'd', 'c',
        'b', 'a', '!', '?', ' '
    ]


    let newStr = ''
    for (let i = 0; i < x.length; i++) {
        newStr += alphabet[Number(x[i]) - 1]

        /* for (let j = 0; j < alphabet.length; j++) {
             //console.log("index", alphabet.indexOf(" ") + 1)
             if (+x[i] === alphabet.indexOf(alphabet[j]) + 1) {
                 newArr.push(alphabet[j])
             }
         }*/
    }
    return newStr
}


//console.log(switcher(['25', '7', '8', '4', '14', '23', '8', '25', '23', '29', '16', '16', '4']))
console.log(switcher(['24', '12', '23', '22', '4', '26', '9', '8']))
