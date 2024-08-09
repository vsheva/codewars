// Given an array of integers of any length, return an array that has 1 added to the value represented by the array.
//
//     the array can't be empty
// only non-negative, single digit integers are allowed
// Return nil (or your language's equivalent) for invalid inputs.
//
// Examples
// Valid arrays
//
//     [4, 3, 2, 5] would return [4, 3, 2, 6]
//     [1, 2, 3, 9] would return [1, 2, 4, 0]
//     [9, 9, 9, 9] would return [1, 0, 0, 0, 0]
//     [0, 1, 3, 7] would return [0, 1, 3, 8]
//
// Invalid arrays
//
//     [1, -9] is invalid because -9 is not a non-negative integer
//
//     [1, 2, 33] is invalid because 33 is not a single-digit integer


//algo
// перебор по убыванию -1 to elem
// 1)if el<10 - останова
//2) иначе элементу назначаем 0
//         +
// --- если значение элементв 0 и он первый в списке , то добавляем вперед 1



/*
function upArray(arr){
    if(arr.length < 1) return null;
    for(let item of arr) if(item < 0 || item > 9) return null

    for(let i = arr.length - 1; i >= 0; i--) {
        console.log("arr[i] before", arr[i])
        arr[i]++;
        console.log("arr[i] after", arr[i])

        if(arr[i] < 10) {
            break;
        }
         else {
             //1
            console.log(' arr[i]  ElseBefore', arr[i])
            arr[i] = 0;
            console.log(' arr[i] ElseAfter', arr[i])

            //2
            //если значение 0 и индекс=0, то добавляем вперед 1
            if (i === 0) {
                console.log("arr before", arr)
                arr.unshift(1);
                console.log("arr after", arr)
            }
        }
         // if(arr[i]===0 && i===0) {
         //     arr.unshift(1);
         // }
    }

    return arr;
}
*/


//algo:
//1 перебор массива по убыванию и наращивать элемент на 1
//2 -----Если элемент <9---> закончить перебор
// ------если >9 --> сделать элемент 0.
// ------Если перый элемент ---> перед ним поставить 1.

function upArray(arr) {
    if (arr.length < 1) return null;
    for (let el of arr) {
        if (el < 0 || el > 9) return null
    }

    for (let i = arr.length - 1; i >= 0; i--) {
        arr[i] += 1;

        if (arr[i] <= 9) {
            break;
        } else {
            arr[i] = 0
        }

        if (arr[i] === 0 && i === 0) arr.unshift(1)
    }

    return arr
}


console.log(upArray([2,3,5,8])) //[2,3,5,9]
//console.log(upArray([2,3,5,9]))  //[2,3,6,0]   //9...10, 5...6  ~~~~~~~~~~~~~~~   сработал if [ 2, 3, 6, 10]  else 1  [2,3,6,0]
//console.log(upArray([9,9,9,9,9])) //[1,0,0,0,0,0]    [ 10, 10, 10, 10, 10 ]
