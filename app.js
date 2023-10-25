"use strict"
for (let x = 1; x <= 100; x++) { 
if (x % 3 == 0 && x % 5 == 0) { 
console.log("ЛолКек");
} else if (x % 3 == 0) { 
    console.log("ЛоЛ");
} else if (x % 5 == 0) { 
console.log("КeК");
} else {
    console.log(x);
} 
}


let value1 = 50;
if (typeof value1 != "number") {
    console.log("Таке чуство шо Бог десь наказує нас за шось"); 
} else {
  for (let a = 2; a < value1; a++) {
 if (a % 2 === 0) {
console.log(a);  
}
  }
}


 let value2 = 44;
 if (typeof value2 != "number") {
    console.log("Таке чуство шо Бог десь наказує нас за шось");
} else {
let b = 2; 
while ( b < value2) {
 if  (b % 2 === 0) {
   console.log(b);
}
b++;
 }
}