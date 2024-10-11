function roundIt(n){
    //coding here...
let arr = String(n).split(".");
let before = arr[0].length
let after = arr[1].length

    if(before < after){
        return Math.ceil(n)
    } else if(before>after) {
        return Math.floor(n)
    } else {
        return Math.round(n)
    }
}
