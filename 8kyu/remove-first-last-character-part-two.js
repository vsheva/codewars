function array(string) {
  string = string.split(",")

    if (string.length<3) return null

    return string.slice(1,-1).join(" ")
}




// function array(string) {
//     return string.split(",").slice(1, -1).join(' ') || null
// }

console.log(array('A1,B2, hh'))
