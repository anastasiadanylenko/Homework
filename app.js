"use strict"

const userNames = ["Петрик Ольга Іванівна", "Гнатюк Петро Антонович", "Рудко Андрій Опанасович"];

userNames.sort();

let initials = userNames.map(name => {

let parts = name.split(' '); 
let newInitials = parts.map(part => part[0]).join('.'); 

return newInitials;
});

console.log(initials); // [ "Г.П.А.", "П.О.І.", "Р.А.О."]




const userNames1 = ['Петро', 'Емма', 'Юстин', 'Ілля', 'Марта', 'Яна', 'Василь', 'Антон', 'Олена'];

let sorting = 'АЕІОУЯЮЄ';

let filteredNames = userNames1.filter(userName => {
return sorting.includes(userName[0]) 
});

console.log(filteredNames); // ['Емма', 'Юстин', 'Ілля', 'Яна', 'Антон', 'Олена']

filteredNames = []; 
for (let i = 0; i < userNames1.length; i++) {
if (sorting.includes(userNames1[i][0])) {
    filteredNames.push(userNames1[i]);
}
}

console.log(filteredNames); // ['Емма', 'Юстин', 'Ілля', 'Яна', 'Антон', 'Олена']




const currentMaxValue = 4589;

let reverseMaxValue = currentMaxValue.toString().split("").reverse().join("");

reverseMaxValue = +reverseMaxValue;

console.log(reverseMaxValue); // 9854
console.log(typeof reverseMaxValue); // 'number'




let resultsArray = [1, 2, [3, [4]]];

resultsArray = resultsArray.flat(Infinity);

   let productOfArray = resultsArray.reduce(function(accumulator, cur) {
    return accumulator * cur;
    })
 
console.log(productOfArray); // 24//