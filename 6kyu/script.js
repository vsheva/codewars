/*
//remove wovels from the string

unction nameShuffler(str){
    //return str.split(" ").map(el=>el.replace(/[aeiouAEIOU]/g, "")).join(" ")
    return str.replace(/[aeiou]/gi, "")
}

console.log(nameShuffler("This website is for losers LOL!"))
*/



/**
//#1 Просто, учитывая строку слов, вернуть длину кратчайшего слова (слов). Строка никогда не будет пустой, и вам не нужно учитывать разные типы данных.


function findShort(s) {
    const arr = s.split(" ")
    const shortest = arr.reduce((prev, cur) => {
        return cur.length < prev.length ? cur : prev
    })
    return shortest.length
}

                                                                                    function findShort(s){
                                                                                     return Math.min(...s.split(" ").map (s => s.length));
                                                                                     }


 const findShort = (s) => s
 .split(' ')
 .sort((a, b) => b.length - a.length)
 .pop()
 .length;

console.log(findShort("bitcoin t over the world maybe who knows perhaps"))


                                                                                       const findShort = (s) => {
                                                                                       const sorted = s.split(' ').sort((a, b) => a.length - b.length)
                                                                                       return sorted[0].length
                                                                                                                     }
 */



/*
//#2 Напишите функцию, которая принимает массив строк в качестве аргумента и возвращает отсортированный массив, содержащий те же строки, упорядоченные от самой короткой до самой длинной.

function sortByLength (array) {
    return array.sort((a,b)=> a.length-b.length)
};

console.log(sortByLength(["Beg", "Life", "I", "To"]))
*/


/**
//#3 Джейден Смит, сын Уилла Смита, является звездой таких фильмов, как «Каратэ-пацан» (2010) и «После Земли» (2013). Джейден также известен своей философией, которую он распространяет через Twitter. Когда он пишет в Твиттере, он известен тем, что почти всегда пишет каждое слово с большой буквы. Для простоты вам придется писать каждое слово с заглавной буквы. Посмотрите, какими должны быть сокращения в приведенном ниже примере. Ваша задача состоит в том, чтобы преобразовать строки в то, как они были бы написаны Джейденом Смитом. Строки являются настоящими цитатами Джейдена Смита, но они не написаны с заглавной буквы так, как он их изначально напечатал.
//"How can mirrors be real if our eyes aren't real" ---->"How Can Mirrors Be Real If Our Eyes Aren't Real"


var str = "How can mirrors be real if our eyes aren't real";

const upper =(str)=>{
   let arr = str.split(" ")
   return arr.map(elem=> elem[0].toUpperCase()+elem.slice(1)).join(" ")
}

console.log(upper(str))
*/




/*
//#4 Дан массив целых чисел. Вернуть массив, где первый элемент — это количество положительных чисел, а второй элемент — сумма отрицательных чисел. 0 не является ни положительным, ни отрицательным. Для ввода [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15] вы должны вернуть [10, -65].

function countPositivesSumNegatives(input) {

    if(!input || input.length == 0) return [];

    const negativeFiltered=input.filter(el=>  el<0)
    const positiveFiltered=input.filter(el=>  el>0)

    const negativeFilteredValue = negativeFiltered.reduce((curVal, el)=>curVal+el,0)
    const positiveFilteredValue = positiveFiltered.reduce((curVal, el)=>curVal+el,0)

   //return new Array(negativeFilteredValue, positiveFilteredValue)
    return [negativeFilteredValue, positiveFilteredValue]
}

let testData = [1, 2, 3, 4, 5,0, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15];
console.log(countPositivesSumNegatives(testData))



                                                                              function countPositivesSumNegatives(input) {
                                                                              if(!input || input.length == 0) return [];

                                                                              var positiveCount = input.reduce((sum, item) => item > 0 ? ++sum : sum, 0);
                                                                              var negativeSum = input.reduce((sum, item) => item < 0 ? sum + item : sum, 0);

                                                                              return [positiveCount, negativeSum];
                                                                              }
*/


/**
//#5 Создайте функцию, которая принимает 2 строковых аргумента и возвращает целое число, соответствующее количеству вхождений второго аргумента в первом. Если вхождений не найдено, должно быть возвращено число 0.//("Hello", "o")  ==>  1; ("", "z")       ==>  0

function strCount(str, letter){
   return str.split("").filter(elem=> elem===letter ).length
}

console.log(strCount('Hello', 'o'))
*/

//#6 Вам дан массив целых чисел нечетной длины, в котором все они одинаковы, кроме одного единственного числа. Завершите метод, который принимает такой массив и возвращает это единственное другое число. Входной массив всегда будет действительным! (нечетная длина >= 3)
//[17, 17, 3, 17, 17, 17, 17] ==> 3
//https://www.codewars.com/kata/57f609022f4d534f05000024/train/javascript


/**
//#7  Given a string str, reverse it and omit all non-alphabetic characters.
//For str = "ultr53o?n", the output should be "nortlu".
 https://www.codewars.com/kata/58b8c94b7df3f116eb00005b/solutions


reverseLetter=(s)=>s.replace(/[^a-z]/gi,'').split('').reverse().join('');
 */


//#6 Given a list of digits, return the smallest number that could be formed from these digits, using the digits only once (ignore duplicates).

/*
function minValue(values) {
    let arr = Array.from(new Set(values))
    return parseInt(arr.sort().join("")) //сортировака массива=> строка=>число
}

console.log(minValue([1, 9, 3, 1, 7, 4, 6, 6, 7]))
*/


/**
//#7 Даны два целых числа a и b, которые могут быть положительными или отрицательными, найдите сумму всех целых чисел между ними и включая их и верните ее. Если два числа равны, верните a или b.
function GetSum(a,b)
{
    return (Math.abs(a - b) + 1) * (a+b) / 2;
}*/


/*
//#8 https://www.codewars.com/kata/57fae964d80daa229d000126/train/javascript
Убрать восклицательный знак в конце строки. Для начинающего ката можно считать, что входные данные всегда являются строкой, проверять ее не нужно.

/06.10.2022/ Если конец строки восклицательный знак, то обрежь строку до этого восклицательного знака : иначе оставь строку

function remove (string) {
    return  string[string.length-1]==="!" ? string.slice(0, string.length-1):string
}
*/

/**
//#9 Напишите функцию с именем sumDigits, которая принимает число в качестве входных данных и возвращает сумму абсолютного значения каждой из десятичных цифр числа.
function sumDigits(number) {
    const absNum=Math.abs(number);
    return absNum.toString().split("").reduce((a,b)=>+a+ +b, 0)
}

console.log(sumDigits(25))
*/


/*
//из числа вывести максимальное 371 =>731
const  config =(num)=>{
   return +String(num).split("").sort((a,b)=>b-a).join("")

}

console.log(config(175))
*/

/**
//#10 Создайте функцию с именем shortcut для удаления строчных гласных (a, e, i, o, u) в заданной строке.

function shortcut (string) {
    console.log(string.split("")
        .filter(elem=>"aeiou".includes(elem)))

    return string.split("")
        .filter(elem=>"aeiou".includes(elem) ? "" : elem)
        .join("")

}
console.log(shortcut('how are you today?'))





function shortcut (string) {

    return string.split("")
        .filter(elem=>"aeiou".includes(elem) ? "" : elem)
        .join("")

}
console.log(shortcut('how are you today?'))


                                                                  function shortcut (string) {

                                                                      return string.replace(/[aeiou]/g, "")

                                                                  }
                                                                  console.log(shortcut('how are you today?'))*/



/*
//#11 Определите String.prototype.toAlternatingCase (или аналогичную функцию/метод, например to_alternating_case/toAlternatingCase/ToAlternatingCase на выбранном вами языке; подробности см. в исходном решении), чтобы каждая строчная буква становилась прописной, а каждая прописная буква становилась строчной. Например:


String.prototype.toAlternatingCase = function () {
   return this.split("").map(el=> el===el.toUpperCase() ? el.toLowerCase() : el.toUpperCase()).join("")
}

console.log("HeLLo WoRLD".toAlternatingCase())
*/


//#12 В этой вам будет дана строка, которая может содержать смешанные прописные и строчные буквы, и ваша задача состоит в том, чтобы преобразовать эту строку либо только в строчные, либо только в прописные буквы на основе: внести как можно меньше изменений. если строка содержит одинаковое количество прописных и строчных букв, преобразовать строку в нижний регистр. Например:






/**
 //13

let obj1={}   //undefined

let obj2={}    //undefined

obj1===obj2    //false

obj2=obj1      //{}

obj1===obj2     //true

 */


/* //#14
//Учитывая список чисел, верните фиксированный список, чтобы значения увеличивались на 1 для каждого индекса от минимального значения до максимального значения (включая оба).
//[1,2,3,4,5]     последнее значение в массиве 5 = numbers[4]=numbers[numbers.length-1]    let arr = []


function pipeFix(numbers) {
    let first = numbers[0];
    let last = numbers[numbers.length - 1];                              //[1,2,3,4,5]     последнее значение в массиве 5 = numbers[4]=numbers[numbers.length-1]    let arr = []

for (let num=first; num<=last; num++) {
      arr.push(num)
    }
 return arr
}

console.log(pipeFix([1,2,3,12]))*/


/** #15
//Complete the function/method so that it returns the url with anything after the anchor (#) removed.
//https://www.codewars.com/kata/51f2b4448cadf20ed0000386/javascript

function removeUrlAnchor(url){
    console.log(url.split('#'))    // [ 'www.codewars.com/katas/?page=1', 'about' ]
   return url.split('#')[0]
}

console.log(removeUrlAnchor('www.codewars.com/katas/?page=1#about'))
*/


/* #16
//У Бена есть очень простая идея для получения прибыли: он что-то покупает и снова продает. Конечно, это не принесло бы ему никакой прибыли, если бы он просто покупал и продавал по одной и той же цене. Вместо этого он купит его по самой низкой цене и продаст по самой высокой. Задача Напишите функцию, которая возвращает минимальное и максимальное количество заданного списка/массива. Примеры (ввод --> вывод)
//Все массивы или списки всегда будут иметь хотя бы один элемент, поэтому вам не нужно проверять длину. Кроме того, ваша функция всегда будет получать массив или список, вам не нужно проверять значение null, undefined или подобное.

function minMax(arr){
    return [Math.min(...arr), Math.max(...arr)]
}

console.log(minMax([1, 2, 3, 4, 5]))
*/



/**
//#17 Определите функцию, которая удаляет дубликаты из массива чисел и возвращает его в качестве результата. Порядок последовательности должен оставаться прежним.

function distinct(a) {
    return  [...new Set(a)];
}
*/

/*
//#18 Верни число (количество) гласных в заданной строке. Мы будем рассматривать a, e, i, o, u как гласные для этой Ката (но не y). Входная строка будет состоять только из строчных букв и/или пробелов.

function getCount(str) {
    return str.split("").filter(el=>"aeiouAEIOU".includes(el)).length
}
console.log(getCount("Valera"))


                                                                            function getCount(str) {
                                                                              return str.replace(/[^aeiou]/gi, '').length;
                                                                            }

*/

/**
//#19 You will be given an array and a limit value. You must check that all values in the array are below or equal to the limit value. If they are, return true. Else, return false. You can assume all values in the array are numbers.
//smallEnough([66, 101], 200) true

function smallEnough(a, limit){
    return a.every(el=> el<=limit)
}

                                                                        function smallEnough(a, limit){
                                                                         return a.filter((el)=> el>limit).length>0 ? false :true
                                                                       }



 */


/*
//#20Учитывая двумерный массив целых чисел, вернуть сглаженную версию массива со всеми целыми числами в отсортированном (по возрастанию) порядке. Пример: Учитывая [[3, 2, 1], [4, 6, 5], [], [9, 7, 8]], ваша функция должна возвращать [1, 2, 3, 4, 5, 6, 7, 8 , 9].
function flattenAndSort(array) {
    return array.flat().sort((a,b)=>a-b);
}

console.log((flattenAndSort([[3, 2, 1], [7, 9, 8], [6, 4, 5]])))


                                                                              function flattenAndSort(array) {
                                                                            return [].concat(...array).sort((a,b) => a - b);
                                                                          }

*/

/**
//#21 Finish the solution so that it sorts the passed in array of numbers. If the function passes in an empty array or null/nil value then it should return an empty array.

function solution(nums){
return nums ? nums.sort((a,b)=>a-b):[]
}

console.log(solution([20, 2, 10]))
 */



//#22 ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

/*
#23 Ваша команда пишет новый модный текстовый редактор, и вам поручили внедрить нумерацию строк. Напишите функцию, которая принимает список строк и возвращает каждую строку с правильным номером перед ним. Нумерация начинается с 1. Формат n: строка. Обратите внимание на двоеточие и пробел между ними. Примеры: (Ввод --> Вывод)
["a", "b", "c"] --> ["1: a", "2: b", "3: c"]
*/

/**
var number=function(array){
 return array.map((el, index)=> `${index+1}:${el}`)
}


console.log(number(["a", "b", "c"]))
 */



//#24 Напишите функцию, которая принимает одну строку (слово) в качестве аргумента. Функция должна возвращать упорядоченный список, содержащий индексы всех заглавных букв в строке.
//https://www.codewars.com/kata/539ee3b6757843632d00026b/train/javascript
//algo: 1) новый массив, 2) перебор 3) сравнение большой буквы с нашей 4) помещаем в массив большие

/**
let capitals = function (word) {
   let newCap=[];
   for (let i=0; i<word.length; i++) {

      if(word[i].toUpperCase()===word[i]) newCap.push(i);
   }
   return newCap
};

console.log(capitals('CodEWaRs')) // [0,3,4,6]
 */


//#25Суммируйте все числа заданного массива (cq. list), кроме самого высокого и самого низкого элемента (по значению, а не по индексу!). Самый высокий или самый низкий элемент, соответственно, является одним элементом на каждом ребре, даже если их несколько с одинаковым значением.
/**
function sumArray(array) {
    array = array || []
return array.sort((a,b)=>b-a).slice(1,array.length-1).reduce((a,b)=>a+b,0)
}

console.log( sumArray([ 0, 1, 6, 10, 11 ]))*/


//#26 Палиндром — это слово, фраза, число или другая последовательность символов, которая одинаково читается как в прямом, так и в обратном порядке. Это включает в себя заглавные буквы, знаки препинания и разделители слов. Реализуйте функцию, которая проверяет, является ли что-то палиндромом. Если ввод представляет собой число, сначала преобразуйте его в строку.

/**
function isPalindrome(line) {
    return line.toString()===line.toString().split("").reverse().join("")
}

console.log(isPalindrome("valera"))
*/

//#27 Получив букву, верните ее положение в алфавите. Ввод :: "а" Вывод :: "Позиция алфавита: 1"
//'abcdefghijklmnopqrstuvwxyz'

/**
function position(letter){
const alphabetArray='abcdefghijklmnopqrstuvwxyz'.split("");

    return 'Position of alphabet: ' + (alphabetArray.indexOf(letter)+1)
}

console.log(position('a'))
*/

//#28 Ваша функция принимает два аргумента: текущий возраст отца (лет) текущий возраст его сына (лет) Подсчитайте, сколько лет назад отец был вдвое старше сына (или через сколько лет он будет вдвое старше).
//Таким образом, вопрос заключался в том, сколько лет назад возраст отца был ТОЧНО в два раза больше, чем возраст сына в НАСТОЯЩЕЕ ВРЕМЯ. Итак, если отцу было 30, а сыну 13, чтобы получить решение, вы должны вычесть возраст отца минус удвоенный текущий возраст сына. Таким образом, 30 - (2*13), что равно 4. Таким образом, 4 года назад, когда папе было 26 лет, это ровно ДВА РАЗА, чем НАСТОЯЩИЙ возраст Сына (13). Надеюсь, это поможет

/**
function twiceAsOld(dadYearsOld, sonYearsOld) {
   return  Math.abs(dadYearsOld - sonYearsOld*2)
}

console.log(twiceAsOld(67, 40))
 */


/*
//#29 https://www.codewars.com/kata/5667e8f4e3f572a8f2000039/train/javascript


This time no story, no theory. The examples below show you how to write function accum:

Examples:
accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"
*/

/**
 function accum(s) {
    return s.split("").map((el, index)=>(el.toUpperCase()+ el.toLowerCase().repeat(index))).join("-")
}

 console.log(accum("Valerii"))
*/

//#30
//Напишите функцию, которая берет массив слов, объединяет их в предложение и возвращает предложение. Вы можете игнорировать необходимость очистки слов или добавления знаков препинания, но вы должны добавлять пробелы между каждым словом. Будьте внимательны, не должно быть пробела ни в начале, ни в конце предложения!
//['hello', 'world', 'this', 'is', 'great']  =>  'hello world this is great'

/**
function smash (words) {
    return words.join(" ").trim()
};
*/


//#31
/*
Мы хотим знать индекс гласных в данном слове, например, в слове супер две гласные (вторая и четвертая буквы).
Таким образом, учитывая строку «супер», мы должны вернуть список из [2, 4].
    Некоторые примеры: Мммм => [] Super => [2,4] Apple => [1,5] YoMama -> [1,2,4,6]

    Гласные в этом контексте относятся к: a e i o u y (включая верхний регистр) Это индексируется от [1..n] (не нулевой индекс!)
    */

//1.массив
//2.перебор слова
//3. совпадает ли строка гласных с нашей буквой из слова
//4. если да, то запушить в массив индексы

/**
function vowelIndices(word){
  let arr=[];

  for(let i=0; i<word.length; i++) {
      if("aeiouyAEIOUY".includes(word[i])) {
          arr.push(i+1);
      }
  }
  return arr
}

console.log(vowelIndices("Valera"))
*/



//#32 Завершите функцию, которая принимает строковый параметр и переворачивает каждое слово в строке. Все пробелы в строке должны быть сохранены.
/*
"This is an example!" ==> "sihT si na !elpmaxe"
"double  spaces"      ==> "elbuod  secaps"
*/

/**
function reverseWords(str) {
    return str.split(" ").map(word => word.split("").reverse().join("")).join(" ")
}

console.log(reverseWords("This is an example!"))*/

/*
console.log(str.split(" "))                                                               //1[ 'This', 'is', 'an', 'example!' ]
console.log( str.split(" ").map(word => word.split("").reverse()))
/!*[
    [ 's', 'i', 'h', 'T' ],
    [ 's', 'i' ],
    [ 'n', 'a' ],
    [
        '!', 'e', 'l',
        'p', 'm', 'a',
        'x', 'e'
    ]
]
*!/
console.log( str.split(" ").map(word => word.split("").reverse().join("")))                //2 [ 'sihT', 'si', 'na', '!elpmaxe' ]
*/



//#33 Герой направляется в замок, чтобы выполнить свою миссию. Однако ему сказали, что замок окружен парочкой могущественных драконов! каждому дракону требуется 2 пули, чтобы быть побежденным, наш герой понятия не имеет, сколько пуль он должен нести.. Предполагая, что он собирается схватить определенное количество пуль и двигаться вперед, чтобы сразиться с другим заданным количеством драконов, выживет ли он? Верните True, если да, False в противном случае :)

/**
function hero(bullets, dragons){
return bullets>=dragons*2
}
*/

//#34  Сможете ли вы найти иголку в стоге сена? Напишите функцию findNeedle(), которая принимает массив, полный мусора, но содержащий одну «иглу». После того, как ваша функция найдет иглу, она должна вернуть сообщение (в виде строки), в котором говорится: "найдена игла в положении " плюс индекс, в котором она нашла иглу, поэтому: Пример (ввод --> вывод)
/**
function findNeedle(haystack) {
    const position=haystack.indexOf("needle")
    return "found the needle at position " + position
}*/

//#35 Это довольно просто. Ваша цель — создать функцию, которая удаляет первый и последний символы строки. Вам дан один параметр, исходная строка. Вам не нужно беспокоиться о строках, содержащих менее двух символов.

/**function removeChar(str){
    return str.slice(1, -1)
};*/

//#36 Напишите функцию, которая проверяет, является ли заданная строка (без учета регистра) палиндромом.

/**
function isPalindrome(x) {
    return x.toLowerCase() === x.toLowerCase().split("").reverse().join('')
}*/

//#37  У меня есть кошка и собака. Я получил их одновременно с котенком/щенком. Это было по-человечески много лет назад. Теперь верните их возраст как [humanYears,catYears,dogYears] ЗАМЕТКИ: HumanYears >= 1 HumanYears - только целые числа
/*
Cat Years
15 cat years for first year
+9 cat years for second year
+4 cat years for each year after that
Dog Years
15 dog years for first year
+9 dog years for second year
+5 dog years for each year after that
*/


/**
 * let humanYearsCatYearsDogYears = function(y) {
    if(y===1) return [1,15,15]
    if(y===2) return [2,24,24]
    return [y,   (y-2)*4 +24,    (y-2)*5 +24]
}

console.log(humanYearsCatYearsDogYears(14))
 */

//#38  Создайте функцию, которая возвращает сумму двух наименьших положительных чисел для заданного массива минимум из 4 положительных целых чисел. Не будут переданы числа с плавающей запятой или неположительные целые числа. Например, когда массив передается как [19, 5, 42, 2, 77], вывод должен быть 7.
/**
function sumTwoSmallestNumbers(numbers) {
    return numbers.sort((a,b)=>a-b).slice(0,2).reduce((a,b)=>a+b)
}

console.log(sumTwoSmallestNumbers([5, 8, 12, 19, 22]))
*/

/**
function sumTwoSmallestNumbers(numbers) {
const nums = numbers.sort((a,b)=>a-b)
    return nums[0] + nums[1]
}

console.log(sumTwoSmallestNumbers([5, 8, 12, 19, 22]))
 */

//#39 Напишите функцию для преобразования имени в инициалы. Это ката строго состоит из двух слов с одним пробелом между ними. На выходе должны быть две заглавные буквы с точкой, разделяющей их. Это должно выглядеть так: Сэм Харрис => S.H Патрик Фини => P.F

/**
function abbrevName(name){
     const nameArray = name.split(" ");
  // console.log(nameArray[0][0]) //s

    return nameArray[0][0] + "." + nameArray[1][0]
}

console.log(abbrevName("Sam Harris"))
*/

//#40 Учитывая строку цифр, вы должны заменить любую цифру ниже 5 на «0», а любую цифру 5 и выше на «1». Верните полученную строку. Примечание: ввод никогда не будет пустой строкой

/**
function fakeBin(x){
return x.split('').map(el => el<5 ? 0 :1 ).join("")
}

console.log(fakeBin('45385593107843568'))
 */

//REPEAT
/*var capitals = function (word) {

let arr=[];
    for (let i = 0; i <word.length; i++) {
        if(word[i]===word[i].toUpperCase()) arr.push(i)
    }
    return arr
}

console.log(capitals('CodEWaRs'))*/


//#41 В этом простом упражнении вы создадите программу, которая будет принимать два списка целых чисел, a и b. Каждый список будет состоять из 3 положительных целых чисел выше 0, представляющих размеры прямоугольных параллелепипедов a и b. Вы должны найти разницу объемов прямоугольных параллелепипедов независимо от того, какой из них больше. Например, если переданы параметры ([2, 2, 3], [5, 4, 1]), громкость a равна 12, а громкость b равна 20. Следовательно, функция должна вернуть 8. Ваша функция будет проверена как на готовых примерах, так и на случайных. Если можете, попробуйте написать это одной строкой кода.

/**
function findDifference(a, b) {
   return Math.abs(a.reduce((d,e)=>d*e)- b.reduce((d,e)=>d*e))
}

console.log(findDifference([3, 2, 5], [1, 4, 4]))
*/


//#42 Напишите функцию с именем setAlarm, которая получает два параметра. Первый параметр, занятости, истинен, когда вы работаете, а второй параметр, отпуск, истинен, когда вы находитесь в отпуске. Функция должна возвращать true, если вы работаете, а не в отпуске (поскольку это обстоятельства, при которых вам нужно установить будильник). В противном случае он должен возвращать false. Примеры:

/*  https://www.codewars.com/kata/568dcc3c7f12767a62000038/train/javascript
setAlarm(true, true) -> false
setAlarm(false, true) -> false
setAlarm(false, false) -> false
setAlarm(true, false) -> true
*/
/**
function setAlarm(employed, vacation){
return employed && !vacation; //employed > vacation
}
*/


//#43  Американцы странные люди: в их домах первый этаж фактически является цокольным, а 13-го этажа нет (из-за суеверия). Напишите функцию, которая по заданному нижнему пределу в американской системе возвращает нижний предел в европейской системе. Когда 1-й этаж заменяется цокольным этажом, а 13-й этаж удаляется, числа перемещаются вниз, чтобы занять свое место. В случае выше 13 они перемещаются вниз на два, потому что под ними есть два пропущенных числа. Подвалы (негативы) остаются такими же, как и универсальный уровень.



//#44 Complete the function/method so that it returns the url with anything after the anchor (#) removed.
//"www.codewars.com#about" --> "www.codewars.com"

/**
 function removeUrlAnchor(url){
   return url.split("#")[0]
}
console.log(removeUrlAnchor("www.codewars.#comabout"))
 */

//#45 Ваша задача - исправить ошибки в оцифрованном тексте. Вам нужно только исправить следующие ошибки:
//S неверно интерпретируется как 5; O неверно интерпретируется как 0;  I неправильно истолкован как 1

/**
function correct(string)
{
   return string.replace(/0/g, "O").replace(/1/g, "I").replace(/5/g, "S")
}

console.log((correct("51NGAP0RE")))
 */

//#46 Учитывая целое число в качестве входных данных, можете ли вы округлить его до следующего (что означает «больше или равно»), кратного 5?
/*
0    ->   0
2    ->   5
3    ->   5
12   ->   15
21   ->   25
30   ->   30
-2   ->   0
-5   ->   -5
etc.*/

/**
function roundToNext5(n){
    return Math.ceil(n/5)*5
}
*/

//#47 В вашем классе был тест, и вы его прошли. Поздравляем! Но вы амбициозный человек. Вы хотите знать, лучше ли вы, чем средний ученик в вашем классе. Вы получаете массив с результатами тестов ваших сверстников. Теперь посчитайте среднее и сравните свой результат! Верните True, если вам лучше, иначе False! Примечание: Ваши баллы не включены в массив баллов вашего класса. Для расчета среднего балла вы можете добавить свой балл в данный массив!

/**
function betterThanAverage(classPoints, yourPoints) {
    return yourPoints > classPoints.reduce((a,b)=>a+b,0)/classPoints.length
}

console.log(betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 75))
 */

//#47
/*
You might know some pretty large perfect squares. But what about the NEXT one?

Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter. Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.

If the parameter is itself not a perfect square then -1 should be returned. You may assume the parameter is non-negative.

Examples:(Input --> Output)

121 --> 144
625 --> 676
114 --> -1 since 114 is not a perfect square
*/

//Чтобы проверить, является ли число x целым, вы можете: а) использовать метод: Number.isInteger(x); б) или использовать трюк: x % 1 == 0
/**
let findNextSquare = (sq) => Math.sqrt(sq)%1===0 ? Math.pow(Math.sqrt(sq)+1,2) : -1
*/

//#48 убрать восклицательные знаки в строке

/**
function removeExclamationMarks(s) {
    return s.split("!").join("")
}

console.log(removeExclamationMarks("Hello World!"));
*/

//#49 Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.

/**
var res = (n)=>(n * (n+1)) / 2;

console.log(res(3))
 */


/**
var summation =  (num)=> {
    let sum=0;
    for (let i=0; i<=num; i++) {
        sum+=i;
    }
    return sum;
}

console.log(summation(5));*/

//#50 You will be given an array and a limit value. You must check that all values in the array are below or equal to the limit value. If they are, return true. Else, return false. You can assume all values in the array are numbers.
//const array1 = [1, 3, 2]; console.log(Math.max(...array1));

/**
function smallEnough(a, limit){
    return Math.max(...a)<=limit ? true : false
}*/

/**
function smallEnough(a, limit){
    return Math.max(...a)<=limit
}

console.log(smallEnough([66, 101], 200));
console.log(smallEnough([78, 117, 110, 99, 104, 117, 107, 115], 100));*/

//#51 Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.
/**
 function invert(array) {
    return array.map(el=> el * (-1))
}


function invert(array) {
    return array.map(el=> el===0 ? el : el * (-1))
}
console.log(invert[1,-3, 5, 7])*/

//#52 All of the animals are having a feast! Each animal is bringing one dish. There is just one rule: the dish must start and end with the same letters as the animal's name. For example, the great blue heron is bringing garlic naan and the chickadee is bringing chocolate cake.
// Write a function feast that takes the animal's name and dish as arguments and returns true or false to indicate whether the beast is allowed to bring the dish to the feast.
// Assume that beast and dish are always lowercase strings, and that each has at least two letters. beast and dish may contain hyphens and spaces, but these will not appear at the beginning or end of the string. They will not contain numerals.

//У всех животных праздник! Каждое животное приносит одно блюдо. Есть только одно правило: блюдо должно начинаться и заканчиваться теми же буквами, что и имя животного. Напишите функцию feast, которая принимает имя животного и блюдо в качестве аргументов и возвращает true или false, чтобы указать, разрешено ли животному приносить блюдо на пир. Предположим, что зверь и блюдо всегда являются строками нижнего регистра и каждая из них состоит как минимум из двух букв. зверь и блюдо могут содержать дефисы и пробелы, но они не будут появляться ни в начале, ни в конце строки. Они не будут содержать цифр.

//Test.assertEquals(feast("chickadee", "chocolate cake"), true)
// Test.assertEquals(feast("brown bear", "bear claw"), false)

/**
 function feast(beast, dish) {
    return beast.slice(0,1)===dish.slice(0,1) && beast.slice(beast.length-1)===dish.slice(dish.length-1);
}

 function feast(beast, dish) {
    return beast[0]===dish[0] && beast[beast.length-1]===dish[dish.length-1];
}

 console.log(feast("chickadee", "chocolate cake"))
 console.log(feast("brown bear", "bear claw"))

 */


//#53 Ваша миссия: Напишите функцию с именем checkCoupon, которая проверяет, что код купона действителен и срок его действия не истек. Купон перестает быть действительным на следующий день ПОСЛЕ истечения срока действия. Все даты будут переданы в виде строк в следующем формате: "ДАТА МЕСЯЦА, ГОД".

/**
 function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
    return enteredCode===correctCode && new Date(currentDate) <= new Date(expirationDate)
}

function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
    return enteredCode===correctCode && Date.parse(currentDate) <= Date.parse(expirationDate)
}

console.log(checkCoupon('123','123','September 5, 2014','October 1, 2014'));
console.log(checkCoupon('123','123','October 5, 2014','October 1, 2014'));

*/

//#54 Создайте функцию, которая отвечает на вопрос «Вы играете на банджо?». Если ваше имя начинается с буквы «R» или строчной «r», вы играете на банджо! Функция принимает имя в качестве единственного аргумента и возвращает одну из следующих строк:  Строки всегда валидны
/*
name + " plays banjo"
name + " does not play banjo"
*/

/**
function areYouPlayingBanjo(name) {
    return name[0] ==="R"|| name[0] ==="r" ? name + " plays banjo" : name+ " does not play banjo"
}*/


//#55 Replace all vowel to exclamation mark in the sentence. aeiouAEIOU is vowel. replace("aeiou") === "!!!!!"

/**
function replace(s){
    return s.replace(/[aeiou]/gi, "!")
}*/

//#56 Finish the solution so that it sorts the passed in array of numbers. If the function passes in an empty array or null/nil value then it should return an empty array.
// For example:
// solution([1, 2, 10, 50, 5]); // should return [1,2,5,10,50]
// solution(null); // should return []

/**
function solution(nums){
    return nums ? nums.sort((a,b)=>a-b) : []
}

function solution(nums){
    return nums!==null ? nums.sort((a,b)=>a-b) : []
}

function solution(nums){
    return (nums||[]).sort((a,b)=>a-b)
}

console.log(solution([20, 2, 10]))*/


//# 57  Завершите функцию, которая принимает два целых числа (a, b, где a < b), и верните массив всех целых чисел между входными параметрами, включая их.

/**
function between(a, b) {
    let array=[]

    for (let i=a; i<=b; i++) {
        array.push(i)
    }
    return array
}

console.log(between(-1, 7))
console.log(between(1, 4))*/



//---------------------------------------------------------------------

//middleware



// const middleware =(callback)=>{
//     const  res=callback;
//     return (()=>console.log(res*10))
// }


/**
const func =(a)=>{
    return 2*a;
}

const middleware =(callback)=>{
    return (()=>callback*10)
}

 middleware(func(4))()

*/

//---------------------------------------------------------------------

//#58
//Учитывая массив целых чисел, удалите наименьшее значение. Не изменяйте исходный массив/список. Если есть несколько элементов с одинаковым значением, удалите элемент с более низким индексом. Если вы получили пустой массив/список, верните пустой массив/список. Не меняйте порядок оставшихся элементов.

/*
* Input: [1,2,3,4,5], output= [2,3,4,5]
    * Input: [5,3,2,1,4], output = [5,3,2,4]
    * Input: [2,2,1,2,1], output = [2,2,2,1]
 */

//1. Найти минимальное значение в массиве
//2. Определить его индекс
//3. Отрезать кусочек массива (до наименьшего значения) и кусочек после (наименьшенго)
//4. Соединить методом concat, создав новый массив

/**
function removeSmallest(numbers) {
    const smallest = Math.min(...numbers);
    const indexSmallest = numbers.indexOf(smallest);

    return numbers.slice(0, indexSmallest).concat(numbers.slice(indexSmallest+1))

}

console.log(removeSmallest([5, 3, 2, 1, 4, 1]))
*/

//1. Найти минимальное значение в массиве
//2. Найти индекс
//2. Создать новый массив, отфильтровав по условию все значения, кроме наименьшего


/**
function removeSmallest(numbers) {
    const smallest = Math.min(...numbers);
    const indexSmallest = numbers.indexOf(smallest);

    return numbers.filter((el, i)=> i!=indexSmallest);
}

console.log(removeSmallest([5, 3, 2, 1, 4, 1]))*/

//#59
//Create a function that accepts a list/array and a number n, and returns a list/array of the first n elements from the list/array.
/**const take=(arr, n)=>arr.slice(0,n)*/

//#60 Учитывая случайное неотрицательное число, вы должны вернуть цифры этого числа в массиве в обратном порядке. 35231 => [1,3,2,5,3]
//https://stackoverflow.com/questions/19182266/how-to-convert-an-integer-into-an-array-of-digits

/** 1.
 function digitize(n) {
    return String(n).split("").reverse().map(Number)
}*/


/** 2.
function digitize(n) {
    return String(n).split("").reverse().map((item)=>+item)
}

console.log(digitize(35231))
*/


/** 3.
const digitize =(n)=> Array.from(String(n), Number).reverse()
*/


/** 4.
const digitize =(n)=> Array.from(String(n), (item=>+item)).reverse()
console.log(digitize(35231))
 */

//#60 Make a function that returns the value multiplied by 50 and increased by 6. If the value entered is a string it should return "Error".
// const problem = x => typeof x === 'string' ? 'Error' : x * 50 + 6;

//#61 Создайте программу, которая фильтрует список строк и возвращает список, содержащий только имена ваших друзей. Если в имени ровно 4 буквы, можете быть уверены, что оно должно быть вашим другом! В противном случае, вы можете быть уверены, что он не... Пример: ввод = ["Райан", "Киран", "Джейсон", "Юс"], вывод = ["Райан", "Юс"]

/**
function friend(friends){
    return friends.filter(item=>{
       if (item.length===4)return  item
    })
}

console.log(friend(["Ryan", "Kieran", "Mark"]));*/

//#62 Numbers ending with zeros are boring. Get rid of them. Only the ending ones.
// 1450 -> 145
// 960000 -> 96
// 1050 -> 105
// -1050 -> -105

//удалить все последние цифры ноль

/**
 function noBoringZeros(n) {
   while (n%10===0 && n!==0) {
   n=n/10
   }
   return n
}

console.log(noBoringZeros(960000))
 */


//отрезать последнюю цифру в числе

/** 1.
function noBoringZeros(n) {
    const str= String(n).split("").slice(0,-1).join("")
    return +str
}

console.log(noBoringZeros(2356))*/


/** 2.
const noBoringZeros=(n)=>Math.floor(n/10)

console.log(noBoringZeros(2356))
 */


/** 3.
const noBoringZeros=(n)=> Number(String(n).slice(0,-1))
console.log(noBoringZeros(2356))
*/

//#63 Вам будет предоставлен список строк. Вы должны отсортировать его в алфавитном порядке (с учетом регистра и на основе значений символов ASCII), а затем вернуть первое значение. Возвращаемое значение должно быть строкой и иметь «***» между каждой буквой. Вы не должны удалять или добавлять элементы из/в массив.

/**
function twoSort(s) {
    return s.sort()[0].split("").join("***")
}

console.log(twoSort(["bitcoin", "take", "over", "the"]))*/

//#64

/**
function descendingOrder(n){
    return Number(String(n).split("").sort((a,b)=>b-a).join(""))
}

console.log((descendingOrder(123456789)))
 */

//#65 When provided with a letter, return its position in the alphabet.
// Input :: "a"

/**
position = (letter) => `Position of alphabet: ${letter.charCodeAt()-96}`;
console.log(position("a"))
*/

//#66 https://www.codewars.com/kata/5b077ebdaf15be5c7f000077/solutions
// Учитывая неотрицательное целое число, например 3, верните строку с бормотанием: «1 овца... 2 овцы... 3 овцы...». Ввод всегда будет действительным, т. е. без отрицательных целых чисел.
//Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.

/**
let countSheep = function (num) {
    let result=""
 for (let i=1; i<=num; i++) {
     result = result +`${i} sheep ...`
    }
   return result
}
*/

/**
 var countSheep = function (num){
   return [...Array(num)].map((el, i) => {
        return`${i+1} sheep ...`
    }).join("")
}
 */

//console.log(countSheep(3))

//#67 Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

/*
 For example,
[true,  true,  true,  false,
    true,  true,  true,  true ,
    true,  false, true,  false,
    true,  false, false, true ,
    true,  true,  true,  true ,
    false, false, true,  true]

The correct answer would be 17.

Hint: Don't forget to check for bad values like null/undefined

    */


/**
function countSheeps(arrayOfSheep) {
    return arrayOfSheep.filter(sheep=> sheep).length
}

function countSheeps(arrayOfSheep) {
    return arrayOfSheep.filter(Boolean).length
}

var array1 = [true,  true,  true,  false,
    true,  true,  true,  true ,
    true,  false, true,  false,
    true,  false, false, true ,
    true,  true,  true,  true ,
    false, false, true,  true ];

console.log((countSheeps(array1)))

 */

//#68 Given a string, you have to return a string in which each character (case-sensitive) is repeated once.
//"String"      -> "SSttrriinngg"

/**
const doubleChar = (str) =>{
    return str.split("").map(el => el+el).join("")
}
console.log(doubleChar("Valeri"))
*/

/** УБРАТЬ ПОВТОРЕНИЕ БУКВ !!!
function doubleChar(str) {
    return [...new Set(str.split(""))].join("")
}


function doubleChar(str) {
   return [...new Set(str)].join("")
}

console.log(doubleChar("Vaaaleeeeriiii"))

 */

/**/

//---------------------------------------------------------------------------
//сколько лет назад отца был в 2 раза больше возраста сына

/**function twiceAsOld(dadYearsOld, sonYearsOld) {
    return Math.abs(dadYearsOld - sonYearsOld*2)
}

console.log(twiceAsOld(50,30))*/

//---------------------------------------------------------------------------

//#69 Напишите функцию, которая всегда возвращает 5 Звучит легко, верно? Просто имейте в виду, что вы не можете использовать ни один из следующих символов: 0123456789*+-/
/**
function unusualFive() {
    return "valer".length
}

console.log(unusualFive())
*/


//#70 Учитывая список цифр, верните наименьшее число, которое можно составить из этих цифр, используя цифры только один раз (игнорируя дубликаты).
//Only positive integers will be passed to the function (> 0 ), no negatives or zeros.
//minValue ({1, 3, 1})  ==> return (13)

/**
function minValue(values){
   const sorted= values.sort((a,b)=> a-b)
   return +[...new Set(sorted)].join("")
}

console.log(minValue([4, 7, 5, 7]));
*/


/**
function minValue(values){
    let arr = Array.from(new Set(values))
    return parseInt(arr.sort().join(''))
}
*/


//#71
// https://www.codewars.com/kata/566fc12495810954b1000030/train/javascript
//Возьмем целое число n (n >= 0) и цифру d (0 <= d <= 9) в качестве целого числа. Возведите в квадрат все числа k (0 <= k <= n) между 0 и n. Подсчитайте количество цифр d, использованных при написании всех k**2. Вызовите nb_dig (или nbDig или...) функцию, принимающую n и d в качестве параметров и возвращающую это значение.

/*
n = 10, d = 1  k ==(0 <= k <= n)
the k*k are 0, 1, 4, 9, 16, 25, 36, 49, 64, 81, 100
We are using the digit 1 in: 1, 16, 81, 100. The total count is then 4.
*/

/**
function nbDig(n, d) {
    let str =""
  for(let i=0; i<=n; i++) {
      str= str+ Math.pow(i, 2)
  }
  return str.split(d).length-1
}

console.log(nbDig( 5, 1))
*/

//#72 https://www.codewars.com/kata/57eaeb9578748ff92a000009/train/javascript
//Учитывая массив целых чисел в виде строк и чисел, верните сумму значений массива, как если бы все они были числами. Верните ответ в виде числа.
//sumMix([9, 3, '7', '3']) //22


/**
function sumMix(x){
return  x.map(a=>+a).reduce((a,b)=>a+b)
}

 const sumMix=x=>x.reduce((a,b)=>+b+a,0)
*/

//#73 https://www.codewars.com/kata/57ee99a16c8df7b02d00045f/train/javascript
//Учитывая двумерный массив целых чисел, вернуть сглаженную версию массива со всеми целыми числами в отсортированном (по возрастанию) порядке. Пример: Учитывая [[3, 2, 1], [4, 6, 5], [], [9, 7, 8]], ваша функция должна возвращать [1, 2, 3, 4, 5, 6, 7, 8 , 9].
//Given [[3, 2, 1], [4, 6, 5], [], [9, 7, 8]], your function should return [1, 2, 3, 4, 5, 6, 7, 8, 9].



/**
function flattenAndSort(array) {
    return array.flat().sort((a,b)=>a-b)
}

*/


/**
function flattenAndSort(array) {
    return [].concat(...array).sort((a,b)=>a-b)
}
console.log(flattenAndSort([[3, 2, 1], [4, 6, 5], [], [9, 7, 8]]))
*/

//#74 https://www.codewars.com/kata/57f609022f4d534f05000024/train/javascript
//Вам дан массив целых чисел нечетной длины, в котором все они одинаковы, кроме одного единственного числа. Завершите метод, который принимает такой массив и возвращает это единственное другое число. Входной массив всегда будет действительным! (нечетная длина >= 3) Примеры
//[1, 1, 2] ==> 2   [17, 17, 3, 17, 17, 17, 17] ==> 3

/*
Array.prototype.indexOf() //возвращает первый найденный индекс или -1;
const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];
console.log(beasts.indexOf('bison')); //1
*/

//1) Перебор. Если первый попавшийся элемент (его индекс) равено последнему элменту( его индексу, то верни первый индекс

/*
function stray(numbers) {
    numbers.map((item, index)=> {
        if (numbers.indexOf(index)===numbers.lastIndexOf(index)) {
            return index
        }
    })
}
*/

/**
function stray(numbers){
    for (var i in numbers){
        if (numbers.indexOf(numbers[i]) === numbers.lastIndexOf(numbers[i])){return numbers[i]}
    }
}


function stray(numbers) {
    numbers = numbers.sort();
    return numbers[0] === numbers[1] ? numbers[numbers.length - 1] : numbers[0];
}
    console.log(stray([1, 1, 2]))*/


//#75 https://www.codewars.com/kata/5502c9e7b3216ec63c0001aa/train/javascript

/**
 function openOrSenior(data){
   return data.map(([age, handicap])=>(age>55 && handicap>7) ? "Senior" : "Open")
}
console.log(openOrSenior([[45, 12],[55,21],[19, -2],[104, 20]]))
 */


//#76  https://www.codewars.com/kata/58649884a1659ed6cb000072/train/javascript

/**function updateLight(current) {

    return current === 'yellow' ? 'red' : current === 'green' ? 'yellow' : 'green';

}*/

//#78 https://www.codewars.com/kata/59cfc000aeb2844d16000075/train/javascript
//Получив строку, сделайте заглавными буквы, которые занимают четные и нечетные индексы отдельно, и верните, как показано ниже. Индекс 0 будет считаться четным. Например, заглавные ("abcdef") = ['AbCdEf', 'aBcDeF']. См. тестовые случаи для большего количества примеров. Ввод будет строчной строкой без пробелов.

/* algo
 строка в массив=>  перебрать map=> тернаник: ---если нечетный индекс ? вывысти букву(к большой букве) : просто к букве ; собрать в строку
                                                ---если четный индекс ? вывысти букву(к большой букве) : просто к букве ;  cобрать в строку

                                                вывести массив

                                                */
/**
function capitalize(s){
   const odd= s.split("").map((item, i)=> i%2!==0 ? item.toUpperCase() :item).join("")
    const even= s.split("").map((item, i)=> i%2===0 ? item.toUpperCase() :item).join("")
    return [odd, even]
};

console.log(capitalize("abracadabra"))
*/

//#79 https://www.codewars.com/kata/55cb632c1a5d7b3ad0000145/train/javascript

/**
function hoopCount (n) {
    return (n>=10) ? "Great, now move on to tricks" : "Keep at it until you get it"
}
 */

//#80 https://www.codewars.com/kata/56530b444e831334c0000020/train/javascript

/**
function chromosomeCheck(sperm) {
    return sperm =="XY" ? "Congratulations! You're going to have a son." : "Congratulations! You're going to have a daughter."
}
 */

//81. https://www.codewars.com/kata/583f158ea20cfcbeb400000a/train/javascript

/**
function arithmetic(a, b, operator) {
    switch (operator) {
        case "add" : return a+b;
        break
        case "subtract" : return a-b;
            break
        case "multiply" : return a*b;
            break
        case "divide" : return a/b;
    }
}

console.log(arithmetic(1, 2, "add"))*/

//#82 https://www.codewars.com/kata/529eef7a9194e0cbc1000255/train/javascript
//algo
// 1)test в маленькую букву, в массив, сортировать, в строку 2) то же про оригинал 3) сравнить

/**
 * var isAnagram = function(test, original) {
    const o =  original.toLowerCase().split("").sort().join();
    const t =  test.toLowerCase().split("").sort().join()
    return o===t ? true : false
};
 */


//82.  https://www.codewars.com/kata/55685cd7ad70877c23000102/solutions

/*
function makeNegative(num) {
    return -Math.abs(num);
}*/

/**
 function makeNegative(num) {
    return  num<0 ? num : -num;
}
 */



/**
function makeNegative(num) {
    return  num ? num * (-1) : num
}

console.log(makeNegative(-42))
*/


//83.https://www.codewars.com/kata/5672a98bdbdd995fad00000f/train/javascript

//Rock Paper Scissors.Let's play! You have to return which player won! In case of a draw return Draw!.
//Examples(Input1, Input2 --> Output):"scissors", "paper" --> "Player 1 won!"
// "scissors", "rock" --> "Player 2 won!"
// "paper", "paper" --> "Draw!"

//algo - 1) ничья 2) все условия, когда выиграет первый 3)в остальных случаях выиграет второй

/**
const rps = (p1, p2) => {
    if (p1 == p2) {
        return 'Draw!'
    }
    if ((p1 == 'rock' && p2 == 'scissors') || (p1 == 'scissors' && p2 == 'paper') || (p1 == 'paper' && p2 == 'rock'))
    {return 'Player 1 won!'}
    else
    {return 'Player 2 won!';}
};*/

//84. https://www.codewars.com/kata/53da6d8d112bd1a0dc00008b/train/javascript

/**
 let reverseList=(list) =>list.reverse()
console.log(reverseList([9, 2, 0, 7]))
 */

//85. https://www.codewars.com/kata/5ce9c1000bab0b001134f5af/javascript
/**
const quarterOf = (month) => {
   if(month<=3) return 1
   if(month<=6) return 2
   if(month<=9) return 3
   if(month<=12) return 4
}

console.log(quarterOf(5))
 */

//86. Define a function that removes duplicates from an array of numbers and returns it as a result.The order of the sequence has to stay the same.
/**
function distinct(a) {
    return [...new Set(a)];
}
 */

//87. getEvenNumbers([2,4,5,6]) // should == [2,4,6]

/**
function getEvenNumbers(numbersArray){
    return numbersArray ?  numbersArray.filter(item => item%2==0 ) : []
}
console.log(getEvenNumbers([13]))
 */

//88. https://www.codewars.com/kata/576bb71bbbcf0951d5000044/javascript
//Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

/**
function countPositivesSumNegatives(input) {
    let positives= input.filter(item=>item>0).length
    let negatives= input.filter(item=>item<0).reduce((a,b)=>a+b)
    return input && input.length ? [positives, negatives] :[]
}

let testData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15];
console.log (countPositivesSumNegatives(testData));
 */

//89. https://www.codewars.com/kata/5266876b8f4bf2da9b000362/javascript

//Algo
// names || [];
//1) проверяем по длинне
//2) switch-case
//3) For 4 or more names,"and 2 others" simply increases.
//(names.length - 2)

/**
function likes(names) {
  names= names || [];

  switch(names.length) {
      case 0: return "no one likes this"; break
      case 1: return `${names[0]} like this`; break
      case 2: return `${names[0]} and ${names[1]} like this`; break
      case 3: return `${names[0]}, ${names[1]} and ${names[2]} like this`; break
      default: return `${names[0]}, ${names[1]} and ${names.length-2} thers like this`; break
  }
}

console.log(likes(['Jacob', 'Alex']))*/

/*
function twoSum(nums, target) {
    const arr = []
    for (let index = 0; index < nums.length; index++) {
        const element = nums[index]
        const complement = target - element
        console.log("complement",complement)
        if (arr[complement] !== undefined) {
            console.log("arr[complement]",arr[complement], index)
            return [arr[complement], index]
        } else {
            arr[element] = index
        }
    }
    return []
}

console.log(twoSum([11,7,15, 2], 9))*/

/**
const twoSum =(nums, target) => {
    let arr=[];
    for (let i=0; i<=nums.length; i++) {
         const element = nums[i]
         const minusAmount =  target- element

        if(arr[minusAmount]!==undefined) {
          return  [arr[minusAmount], i]
        } else {
           arr[element]=i
        }
    }
    return []
}

console.log(twoSum([11,7,15, 2], 9))*/

//90. https://www.codewars.com/kata/57f24e6a18e9fad8eb000296/train/javascript

//1. массив
//2. array[i]
//3. %  - остаток от деления
//4. индекс  (nbPetals - 1) % array.length - индекс фразы

/**
function howMuchILoveYou(nbPetals) {
    const array= ["I love you", "a little", "a lot", "passionately", "madly", "not at all"]

    return array[(nbPetals-1)% array.length]
}

console.log(howMuchILoveYou(7))*/

//91.Replace With Alphabet Position
//https://www.codewars.com/kata/546f922b54af40e1e90001da/train/javascript

//algo

//1. вывести ISO каждой буквы предложения
//2. если код в промежутке 65-90, то в строку добавлять (ISO - 64)// 65 символ = первому в алфавите// c пробелом
//3. отрезать undefined, так как индексов на 1 меньше

/**
function alphabetPosition(text) {
let result=""
    for(let i = 0; i < text.length; i++) {
        let letter = text.toUpperCase().charCodeAt(i);
        if(letter>64 && letter<91) result += (letter-64) + " "
    };
    return result.slice(0, result.length-1)
}

console.log(alphabetPosition("A TThe sunset sets at twelve o' clock."))
*/

//92. Counting Duplicates
//https://www.codewars.com/kata/54bf1c2cd5b56cc47f0007a1/train/javascript

    //https://stackoverflow.com/questions/24252305/using-array-reduce-method-to-count-duplicate-elements


//algo
/*
A) "fruitsCount" - это object in the first block.

Б) Метод Array.reduce() принимает 2 аргумента:

   1) функцию function(accumulator, value, index, array) -> accumulator
The initial value for the accumulator.
    2)So in this case, we're passing in an object {} with a single key {}, as our initial accumulator value.

This object is always returned within our function, so the final value from reduce(...) will be the same object, so we can return .count to return the final count.*/

/**
var fruits = "aabbccccde".split("").reduce(function(fruitsCount, currentFruit){
    if(typeof fruitsCount[currentFruit] !== "undefined"){
        fruitsCount[currentFruit]++;
        console.log("fruitsCount",fruitsCount)
        return fruitsCount;
    } else {
        fruitsCount[currentFruit]=1;
        return fruitsCount;
    }
}, {});

console.log("ruits",fruits)

console.log(Object.values(fruits).filter(item=>item>1).length)
*/




/*
const duplicateCount=(text)=>{
    const obj = text.toLowerCase().split("").reduce(function(fruitsCount, currentFruit){
        console.log("fruitsCount[currentFruit]", fruitsCount[currentFruit])
        if(typeof fruitsCount[currentFruit] !== "undefined"){
            fruitsCount[currentFruit]++;
            console.log("fruitsCount",fruitsCount) //fruitsCount { a: 2, b: 2, c: 4 }
            return fruitsCount;
        } else {
            fruitsCount[currentFruit]=1;
            return fruitsCount;
        }
    }, {});

    return Object.values(obj).filter(item=>item>1).length   //in:{obj}  ; out:   [] of values
}

console.log(duplicateCount("aabbccccde")) //3

*/

/**
const duplicateCount=(text)=>{
    const obj = text.toLowerCase().split("").reduce((acc, element)=> {
        console.log("typeof", typeof acc[element])    // undefined, number
        console.log("acc[element]", acc[element])    // undefined, 1, 2 ,3

        if (typeof acc[element] === "undefined") {
           acc[element]=1;
            console.log("acc if undefined", acc)      //{ a: 2, b: 2, c: 4, d: 1, e: 1 }
            return acc;
        } else {
            acc[element]+=1;
            console.log("regular acc", acc)         //acc { a: 2, b: 2, c: 4 }
            return acc;
        }
    }, {})

    return Object.values(obj).filter(el=>el>1).length
}

console.log(duplicateCount("aabbccccde"))
*/



/*
function duplicateCount(text){
    return text
        .toLowerCase()
        .split('')
        .reduce(function(a, l) {
            a[l] = a[l] ? a[l]+1 : 1;
            if(a[l] === 2) a.count++;
            return a;
        }, {count:0}).count;
}

console.log(duplicateCount("aabbccccde"))*/

//92. Find the first non-consecutive number  https://www.codewars.com/kata/58f8a3a27a5c28d92e000144/train/javascript

//1) цикл for; при этом индекс < длинны массива -1 (т.е. количество прохождений цикла- например, 5 цифр, количество проходов 3
//2)  nowElement - arr[i]
//3) next - arr[i+1]
//4) условие(если now+1 не равно next, то вернуть значение первый непоследовательный, т.е. первую цифру после последовательного)

/**
function firstNonConsecutive (arr) {

    for(let i = 0; i < arr.length-1; i++) {
        const now =arr[i]
        const next= arr[i+1];

        if(now+1 !==next) return now + 2 //return next
    }
    return null;
}

console.log(firstNonConsecutive([1,2,3,4,6,7,8]))*/

//93. No oddities here
/**
function noOdds( values ){
    return values.filter(element=> element%2===0)
}

console.log( noOdds( [0,1] ))
*/

/**
function noOdds( values ){
    let arr=[]
   for (let i=0; i<values.length; i++) {
       if(values[i]%2===0) {
           arr.push(values[i])
       }
   }
   return arr
}

console.log( noOdds( [0,1] ))*/

//93. https://www.codewars.com/kata/5e602796017122002e5bc2ed

/**
 * function partialKeys (obj) {
      //Obj.keys (sort, reverse) так как у нас идет перезатирка
     //1. loop over the properties of the obj;
     //2. создать все подстрочные свойства этого обьекта и назначить им значения;



}*/


//93. consonant value https://www.codewars.com/kata/59c633e7dcc4053512000073

//1. заменить гласные в  строке методом replace на пробел(" ") ; убрать пробел; разбить на массив по пробелу ; вызвать map (внутри которой вызвать addSubstring) ; вывести максимум
//2. определить charCode по индексу -96 в UNICODE (ASCII);
//3. строку разбить на куски, промапить CharcodeToValue, вывести значение acc

/**
function solve(s) {
    return Math.max(...s.replace(/[aeoui]+/g, " ").trim().split(" ").map(el=> addSubstring(el)))
};

const charValue =(c)=>{
   return c.charCodeAt(0)-96
}

const addSubstring=(str)=>{
    return str.split("").map(elem=>charValue(elem)).reduce((acc, e)=>acc+=e, 0)
}

console.log(solve("zodiac")); //26
console.log(solve("chruschtschov")); //80
console.log(solve("khrushchev")); //38
console.log(solve("strength")); //57
console.log(solve("catchphrase")); //73
console.log(solve("twelfthstreet")); //103
console.log(solve("mischtschenkoana")); //80
*/

//94. Transportation on vacation  https://www.codewars.com/kata/568d0dd208ee69389d000016/train/javascript

// function rentalCarCost(d) {
//     if (d>6){
//         return d*40 -50
//     }
//     else if (d>2) {
//         return d*40 -20
//     }
//     else {
//         return d*40
//     }
//
// }

//95. All Star Code Challenge   https://www.codewars.com/kata/5865918c6b569962950002a1/train/javascript
//https://stackoverflow.com/questions/881085/count-the-number-of-occurrences-of-a-character-in-a-string-in-javascript/10671743#10671743

/**
function strCount(str, letter){
    console.log(str.split(letter))     // ['He', '', 'o']
    console.log(str.split(letter))     //  [ '', 'a', 'a', 'ylara', 'u' ]
    console.log(str.split(letter))       //  ['','', 'm','m', 'myl', 'r', '',  'mu',  '','']
    return str.split(letter).length-1
}

console.log(strCount('Hello', 'l'))   //2
console.log(strCount('mamamylaramu', 'm')) //4
console.log(strCount('aamamamylaraamuaa', 'a')) //9
*/

//96. https://www.codewars.com/kata/5a3dd29055519e23ec000074/train/javascript

//algo

//1. перебор правильных ответов
//2. сравнение правильных ответов по индексу (0...1..2) c ответами учеников и если верный, то добавляем +4
//3. если правильный ответ не правильнен ответу ученика и не пустая строка (если пустая строка, то +0), то отнимаем -1
//4. если сумма <0, то выводить 0
// возвращать суммуу



/**
function checkExam(array1, array2) {
    let sum=0
    for(let i = 0; i < array1.length; i++) {
            if(array1[i] === array2[i]) {
                sum+=4;
            }
            else if (array1[i]!== array2[i] && array2[i] !== "") {
                sum -= 1;
            }

            else if (array2[i] === ""){
                sum += 0
            }
    }

    return sum <0 ? 0 : sum
}

console.log(checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"]))*/

//--------------09/12----------------------------

//97
//https://www.codewars.com/kata/559ac78160f0be07c200005a/train/javascript Name Shuffler

/**
function nameShuffler(str){
    return str.split(" ").reverse().join(" ")
}

console.log(nameShuffler('john McClane'))
 */

//ВАЖНЫЙ!
//98 https://www.codewars.com/kata/571d42206414b103dc0006a1/train/javascript

/**
const arr=(n)=>{
    let array=[]

    for(let i=0; i<n; i++) {
        array.push(i)
    }

    return array
}

console.log(arr(5))*/

//99. https://www.codewars.com/kata/576b93db1129fcf2200001e6/javascript
//Sum without highest and lowest number
//{ 6, 2, 1, 8, 10 } => 16

//algo
//1. array, sort, cut 1 and last, reduce

/**
function sumArray(array) {
    array = array||[]
return array.sort(((a, b) => a-b)).slice(1,array.length -1).reduce((a,b)=>a+b,0)
}

console.log(sumArray([ 6, 2, 1, 8, 10 ]))*/

//100. https://www.codewars.com/kata/5899642f6e1b25935d000161/train/javascript
//Merge two sorted arrays into one

//sort, merge,

/**
 function mergeArrays(arr1, arr2) {
    arr1= arr1.sort((a,b)=>a-b)
    arr2= arr2.sort((a,b)=>a-b)

   return [...new Set([...arr1,...arr2].sort((a,b)=>a-b))]
}

console.log(mergeArrays([1,3,5,7,9], [10,8,6,4,2]))*/

//101 https://www.codewars.com/kata/545a4c5a61aa4c6916000755/javascript Find the middle element

//1.новый массив-индекс среднего-> значение
//2. индекс значения в старом массиве


/**
 function gimme(a) {
    return a.indexOf(a.concat().sort(function(a, b) { return a - b })[1])
}
 */

/*
function gimme (triplet) {
let newarrValueIndexMiddle = triplet.slice().sort((a,b)=>a-b)[1]

return triplet.indexOf(newarrValueIndexMiddle)

}

console.log(gimme([2, 3, 1]))
*/

//102. What is between? https://www.codewars.com/kata/55ecd718f46fba02e5000029/javascript

/**
function between(a, b) {
    let arr=[]

    for (let i=a; i<=b; i++) {
        arr.push(i)
    }
    return arr
}

console.log((between(1, 4)))
*/

//103. https://www.codewars.com/kata/5808dcb8f0ed42ae34000031/javascript
/*
function switchItUp(number){

    switch (number) {
        case 1:
            return "One"
            break;

        case 2:
            return "Two"
            break;

        case 3:
            return "Three"
            break;


        case 4:
            return "Four"
            break;

        case 5:
            return "Five"
            break;

        case 6:
            return "Six"
            break;

        case 7:
            return "Seven"
            break;

        case 8:
            return "Eight"
            break;

        case 9:
            return "Nine"
            break;

        case 0:
            return "Zero"
            break;


    }


}

*/


//104. Break camelCase https://www.codewars.com/kata/5208f99aee097e6552000148/javascript

//algo
// в массив-перебрать массив мапом-> и если el ===el.toUpperCase, то добавлять пробел ----------- вернуть массив в строку)

/**
function solution(string) {

 return string.split("").map((el)=>{
        if (el=== el.toUpperCase()) {
            return " "+el
        }
        return el
    }).join("")

}

console.log(solution('camelCasing'))*/


//--------  USA -----------------

    //105.  https://www.codewars.com/52fba66badcd10859f00097e
//Disemvowel Trolls


/**
    function disemvowel(str) {
        return str.replace( /[aeiou]/gi, '');
    }

console.log(disemvowel("This website is for losers LOL!"))
 */

//106  https://www.codewars.com/kata/545991b4cbae2a5fda000158/

/**
 function include(arr, item){
    return arr.includes(item)
}*/


//107. https://www.codewars.com/kata/52ceafd1f235ce81aa00073a/

/**
function plural(n) {
    return n===1 ?false : true
}*/

/*
function plural(n) {
    return n!==1
}*/


//108. Multiplication table https://www.codewars.com/kata/534d2f5b5371ecf8d2000a08/

//algo
    //algo 1) строчка(перебор) + result (умножение) 2) пример, как это работает


/**
row [ 1 ]
row [ 1, 2 ]
row [ 1, 2, 3 ]
res [ [ 1, 2, 3 ] ]
row [ 2 ]
row [ 2, 4 ]
row [ 2, 4, 6 ]
res [ [ 1, 2, 3 ], [ 2, 4, 6 ] ]
row [ 3 ]
row [ 3, 6 ]
row [ 3, 6, 9 ]
res [ [ 1, 2, 3 ], [ 2, 4, 6 ], [ 3, 6, 9 ] ]
*/


/**
let multiplicationTable =(n)=>{
    let res=[]
    for (let i =1; i<=n; i++) {
        let row =[]
        for (let j=1; j<=n; j++) {
            row.push(i*j)
            console.log( "row", row)
        }
        res.push(row)
        console.log("res", res)
    }
    return res
}


 let multiplicationTable =(n)=>{
    let res=[]
    for (let i =1; i<=n; i++) {
        let row =[]
        for (let j=1; j<=n; j++) {
            row.push(i*j)
            console.log( "row", row)
        }
        res.push(row)
        console.log("res", res)
    }
    return res
}

 console.log( multiplicationTable (3))
*/




//.109 Your order, please https://www.codewars.com/kata/55c45be3b2079eccff00010f

//algo - 1) осортировать строку в массив
// 2-a) пройтись по всему массиву, записав массив строк;
// 2-b) внутри пройтись по каждому слову
// 3) cделать условие- если через метон индексOf- если первый индекс найденного значения
//больше нуля, то запушить в новый массив это слово


/*function order(words){
    let array =  words.split(" ")
    let ascArray= []

    array.map((el, i)=>{

        let insideArr= el.split("")
        console.log("insideArr",insideArr)

        insideArr.map((element, index)=>{
            if(insideArr[index].indexOf(i)) {
                ascArray.push(insideArr[index])
            }
        })
    })
    return ascArray.join(" ")
}*/

/**
    function order(words){
    let array =  words.split(" ");
    let ascArray= [];
    for (i=0; i<=array.length; i++) {

        for (b=0; b<array.length; b++ ) {
            console.log("array[b]", array[b])
            console.log("array[b].indexOf(i)", array[b].indexOf(i))
            if (array[b].indexOf(i) >= 0) {
                ascArray.push(array[b])
                console.log("ascArray", ascArray)
            }
        }
    }
    return ascArray.join(" ")
}

console.log(order ("is2 Thi1s T4est 3a"))*/

/*
array[b] is2
array[b].indexOf(i) -1
array[b] Thi1s
array[b].indexOf(i) -1
array[b] T4est
array[b].indexOf(i) -1
array[b] 3a
array[b].indexOf(i) -1
array[b] is2
array[b].indexOf(i) -1
array[b] Thi1s
array[b].indexOf(i) 3
ascArray [ 'Thi1s' ]
array[b] T4est
array[b].indexOf(i) -1
array[b] 3a
array[b].indexOf(i) -1
array[b] is2
array[b].indexOf(i) 2
ascArray [ 'Thi1s', 'is2' ]
array[b] Thi1s
array[b].indexOf(i) -1
array[b] T4est
array[b].indexOf(i) -1
array[b] 3a
array[b].indexOf(i) -1
array[b] is2
array[b].indexOf(i) -1
array[b] Thi1s
array[b].indexOf(i) -1
array[b] T4est
array[b].indexOf(i) -1
array[b] 3a
array[b].indexOf(i) 0
ascArray [ 'Thi1s', 'is2', '3a' ]
array[b] is2
array[b].indexOf(i) -1
array[b] Thi1s
array[b].indexOf(i) -1
array[b] T4est
array[b].indexOf(i) 1
ascArray [ 'Thi1s', 'is2', '3a', 'T4est' ]
array[b] 3a
array[b].indexOf(i) -1
Thi1s is2 3a T4est

Process finished with exit code 0

*/





/*
function order(words) {
    const result = [];
    const chunks = words.split(' ');

    for (let i = 1; i < chunks.length + 1; i++) {
        result.push(chunks.find((chunk) => chunk.includes(i)));
    }

    return result.join(' ');
}*/


// function sumMax(arr) {
//     let sum =0;
//     let sums=[];
//     if (arr[0]<0) arr.shift()
//     if (arr[arr.length-1]<0) arr.pop()
//     for (let i = 0; i < arr.length; i++) {
//         sum= sum + arr[i];
//         if (sum<0) {
//             sums.push(sum);
//             sum=0
//         }
//     }
//     if (sum!==0)
//     sums.push(sum)
//     return sums
// }

//

function sumMax(arr) {
    let sum = 0;
    let sums = [];
    if (arr[0] < 0) sums.push(arr.shift());
    if (arr[arr.length - 1] < 0) sums.push(arr.pop());
    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
        if (sum < 0) {
            sums.push(sum); sum = 0
        }
    };
    if (sum !== 0) sums.push(sum);  return Math.max(...sums)

}


function sumMax2(arr) {
    let sum = 0;
    let sums = [];
    if (arr[0] < 0) sums.push(arr.shift());
    if (arr[arr.length - 1] < 0) sums.push(arr.pop());
    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
        if (sum < 0) {
            sums.push(sum); sum = 0
        }
    };
    if (sum !== 0) sums.push(sum);
    return sums

}


const a1 = [ -1, -2, -3]

console.log(sumMax2(a1))
const b = [-1, -2, -3]
console.log(sumMax(b))