/*
Description:
    Task
You are given a dictionary/hash/object containing some languages and your test results in the given languages. Return the list of languages where your test score is at least 60, in descending order of the scores.

    Note: the scores will always be unique (so no duplicate values)

Examples
{"Java": 10, "Ruby": 80, "Python": 65}    -->  ["Ruby", "Python"]
{"Hindi": 60, "Dutch" : 93, "Greek": 71}  -->  ["Dutch", "Greek", "Hindi"]
{"C++": 50, "ASM": 10, "Haskell": 20}     -->  []
*/

//https://learn.javascript.ru/keys-values-entries


/*function myLanguages(results) {

       return Object.entries(results)
       .sort((a,b)=>b[1]-a[1])
       .filter((el)=> {
           return el[1]>=60
     }).map(el=>el[0])
}*/


//фильтр по вычисляемому ключу обьекта:  results[el]

function myLanguages(results) {
       console.log("Object.keys(results)", Object.keys(results)) // [ 'Hindi', 'Greek', 'Dutch', 'Romanian' ]
       return Object.keys(results)
      .filter((el)=> {
             console.log("results[el]",results[el]) //60, 71, 93, 30
            return results[el]>=60
     }).sort((a,b)=> {
            console.log("results[b]", results[b])
            console.log("results[a]", results[a])
                return  results[b] - results[a]
           })
}


//В этом решении ключ используется для проверки массива, предоставленного в качестве аргумента,
// с использованием синтаксиса array[key], они просто проверяют массив, не предоставленный обратным вызовом.

console.log(myLanguages({"Hindi" : 60, "Greek" : 71, "Dutch" : 93, "Romanian": 30}))
//console.log(myLanguages({"C++" : 50, "ASM" : 10, "Haskell" : 20}))
