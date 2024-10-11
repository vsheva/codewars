function findDup( arr ){

    return arr.filter(el=>arr.indexOf(el)!==arr.lastIndexOf(el))[0] //!
}
