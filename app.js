"use strict"

 function detonatorTimer(delay) { 
 let num = delay;

const id = setInterval(() => {
 if (num > 0) {
  console.log(num);
  num --;
 } else {
 clearInterval(id);   
console.log('BOOM!');
 }
}, 1000)
}
detonatorTimer(3);





function detonatorTimer2(delay2) {
    for (let i = delay2; i >= 0; i --) {
    setTimeout (() => {
    if (i === 0) {
        console.log('BOOM!')
    } else {
        console.log(i);
    }
}), 1000;
}
    }


   detonatorTimer2(3);
   // 3
   // 2
   // 1
   // BOOM!






  let me = {
	name: 'Anastasia',
	residency: 'Kyiv',
	gender: 'female',
	age: 28,
    education: 'tourism specialist',
	eyesColor: 'blue',
	myChildName: 'Mark',
	favoriteDish: 'Tori Maki sushi',
    introduceMyDiploma() {
        console.log(`i received a diploma of ${this.education}`); 
    },
	admireTheAppearance() {
		console.log(`My son ${this.myChildName} has ${this.eyesColor} color of eyes like me`);
    },
	shareInformation() {
		console.log(`I always like to order my favorite ${this.favoriteDish} in Evrasia`);
	}
}

me.introduceMyDiploma();
me.admireTheAppearance();
me.shareInformation();

let securedIntroduceMyDiploma = me.introduceMyDiploma.bind(me);
let securedAdmireTheAppearance = me.admireTheAppearance.bind(me);
let securedSelfShareInformation = me.shareInformation.bind(me);

setTimeout(securedIntroduceMyDiploma, 3000); // виведе коректний результат
setTimeout(securedAdmireTheAppearance, 1000); // виведе коректний результат
setTimeout(securedSelfShareInformation, 2000); // виведе коректний результат




 
   function someFunction(currency, amount) {
    let exchangeRate;

    if (currency === 'dollar') {
        exchangeRate = 36;
    } else if (currency === 'euro') {
        exchangeRate = 39;
    } else {
        return 'Default';
    }
 
const exchangedAmount = amount / exchangeRate;
console.log(`If you change ${amount} UAH you will get ${exchangedAmount.toFixed(2)} ${currency}`)
}
    
// тут напишіть довільну функцію яка робить якусь роботу зі своїми аргументами та виводить результат в консоль

function slower(func, seconds) {
return function(...args) {
    console.log("Chill out, you will get you result in 5 seconds");
    setTimeout(() => {
        func(...args);

    }, 1000 * seconds);
}
}
    // тут ваш код для декоратора


let slowedSomeFunction = slower(someFunction, 5); // обгортаєте свою довільну функцію 'someFunction' в декоратор і задає значення вповільнення
     /*якісь аргументи*/ // викликаєте декоратор

console.log(slowedSomeFunction('dollar',1000))
console.log(slowedSomeFunction('euro',2000))
// виведе в консоль "Chill out, you will get you result in 5 seconds
//...через 5 секунд виведе результат роботи 'someFunction'.//
