let findSmallestInt=(arr)=>{
    // let min= arr[0]
    //
    // for (let i=0; i<arr.length; i++) {
    //     if(arr[i]<min) {
    //         min = arr[i]
    //     }
    // }
    // return min
    return Math.min(...arr)
}

console.log(findSmallestInt([1,5,9]))
