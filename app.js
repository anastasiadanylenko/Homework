"use strict"

function recursiveOddSumTo(number)  {
  if (number < 1) {
  return 0;
  } else if (number % 2 !== 0) {
    return number + recursiveOddSumTo(number - 2);
} else if (number % 2 === 0) {
  return recursiveOddSumTo(number - 1);
}
}
console.log(recursiveOddSumTo(1)) // 1
console.log(recursiveOddSumTo(10)) // 25




function iterativeOddSumTo(number) {
  let sumOfNumber = 0;
 for (let i = 1; i <= number; i++) {
  if (i % 2 !== 0) {
 sumOfNumber += i;
  }
}
return sumOfNumber;
 }

console.log(iterativeOddSumTo(1)) // 1
console.log(iterativeOddSumTo(10)) // 25



