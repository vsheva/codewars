function swap(string) {
    let vowel = 'aeoiu'

    return string.replaceAll('aeoui', (el) => el.toUpperCase())

    //return string.split("").map((el) => vowel.includes(el) ? el.toUpperCase() : el).join("")

    /* let res = ''
     for (let i = 0; i < string.length; i++) {
         if (vowel.includes(string[i])) {
             res += string[i].toUpperCase()
         } else {
             res += string[i]
         }
     }
     return res;*/


    // let res = ''
    // for (let i = 0; i < string.length; i++) {
    //     vowel.includes(string[i]) ? res += string[i].toUpperCase() : res += string[i]
    //
    // }
    // return res;


}

console.log(swap("Sunday"))
