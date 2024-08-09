// Description:
//     Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.
//
//     It should remove all values from list a, which are present in list b keeping their order.
//
// arrayDiff([1,2],[1]) == [2]
// If a value is present in b, all of its occurrences must be removed from the other:
//
//     arrayDiff([1,2,2,2,3],[2]) == [1,3]


// var myArray = ['a', 1, 'a', 2, '1'];
// let unique = [...new Set(myArray)];
// console.log(unique); // unique is ['a', 1, 2, '1']

//https://stackoverflow.com/questions/1960473/get-all-unique-values-in-a-javascript-array-remove-duplicates

/*function arrayDiff(a, b) {
    let newArray = [...new Set(a)];
    newArray = b.map(elem=> {
          if(newArray.includes(elem)) {
           return   newArray.filter(el=>el!==elem )
          }
      })
    return newArray;
}*/


function arrayDiff(a, b) {
    //b= new Set(b)
    return a.filter((el)=>{
       // return b.indexOf(el)===-1
       return !b.includes(el)
        }
    )
}

console.log((arrayDiff([1,1,2,3], [1,2])))
