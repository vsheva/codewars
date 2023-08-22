//https://www.codewars.com/kata/57fae964d80daa229d000126/javascript

/* ❓ Description:
    Remove an exclamation mark from the end of a string. For a beginner kata, you can assume that the input data is always a string, no need to verify it.

    Examples
remove("Hi!") == "Hi"
remove("Hi!!!") == "Hi!!"
remove("!Hi") == "!Hi"
remove("!Hi!") == "!Hi"
remove("Hi! Hi!") == "Hi! Hi"
remove("Hi") == "Hi"
*/

// ✅

function remove (string) {
    //coding and coding....
    return string[string.length - 1]==="!" ? string.substring(0, string.length - 1) : string;


}

console.log(remove("Hi! Hi!"))