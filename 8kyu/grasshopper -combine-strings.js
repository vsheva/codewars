// ❓ Combine strings function
// Create a function named combineNames that accepts two parameters (first and last name). The function should return the full name.
//
//     Example:
//
// combineNames('James', 'Stevens')
// returns:
//
//     'James Stevens'

// ✅ Solution

//const combineNames =(first, last)=> first+ " "+ last

const combineNames =(...names)=> {
    return names.join(" ")
}

console.log(combineNames("valera", "shevchenko"))