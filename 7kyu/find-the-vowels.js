/*
We want to know the index of the vowels in a given word, for example, there are two vowels in the word super (the second and fourth letters).

So given a string "super", we should return a list of [2, 4].

    Some examples:
    Mmmm  => []
Super => [2,4]
Apple => [1,5]
YoMama -> [1,2,4,6]
NOTES
Vowels in this context refers to: a e i o u y (including upper case)
This is indexed from [1..n] (not zero indexed!)
*/

/*function vowelIndices(word) {
    const str = "aeiouy"
    const wordArr = word.toLowerCase().split('');

    let arr =[];

    wordArr.forEach((el, i)=>{
       if(str.indexOf(el)!== -1) {
        arr.push(i+1);
       }
    })
    return arr
}

console.log(vowelIndices("valera"))*/

function Rect(name, width, height) {
    this.name = name;
    this.width = width;
    this.height = height;
    this.do=()=>{
        return this.width*this.height;
    }
}

const PracticeRect1 = new Rect("Dave", 10,20);
const PracticeRect2 = new Rect("Alex", 40,60);
const PracticeRect3 = new Rect("Ana", 40,60);
console.log(PracticeRect1.name)
console.log(PracticeRect2.name)
console.log(PracticeRect3.name)
console.log(PracticeRect1.do())

