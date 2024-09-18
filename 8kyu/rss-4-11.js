//вывести строки содержащие буквы и ‘а’ и ‘о’ слова не должны повторятся
//Task-1
let newWord='';
let vegetables= ["Капуста", "Репа", "Редиска", "Морковка", "Картошка", "Лук" ]


for (let i=0; i<vegetables.length; i++) {
    let word = vegetables[i]

    for(let j=0; j<word.length; j++) {
        if(word[j]==="а") {

            for(let n=0; n<word.length; n++) {
              if(word[n]==="о") {
                  newWord+=word+" ";
                  break;
              }
            }
            break;
        }
    }
}
console.log(newWord)



