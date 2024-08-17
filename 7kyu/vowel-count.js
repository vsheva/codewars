//https://www.codewars.com/kata/54ff3102c1bad923760001f3

function getCount(str) {
    const wovels=['a', 'e', 'i', 'o', 'u' ]

    //1
   /*
   const newArr = [];
    for( let i=0; i<str.length; i++ ) {
        for( let j=0; j<wovels.length; j++ ) {
             if(str[i] === wovels[i]) {
                 newArr.push(str[i])
             }
        }
    }
    return newArr.length
    */

    let count = 0;
    for( let i=0; i<str.length; i++ ) {
        for( let j=0; j<wovels.length; j++ ) {
            if(str[i] === wovels[i]) {
                count++; //count+=1;
            }
        }
    }
    return count


    //2
    // return (str.split("").filter(el=> 'aeou'.includes(el))).length

}

console.log(getCount("abracadabra"))
