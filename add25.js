"use strict";
{
    var a = 1;
    var sum = 0;
    while (a <= 25) {
        sum = sum + a;
        a++;
    }
    console.log(" is the sum of first 25 natural numbers ==", sum);
}
//using for loop
//using function
console.log("==========using function==========");
function sumOfNaturalNumbers(num) {
    var sum = 0;
    for (var i = 1; i <= num; i++) {
        sum = sum + i;
    }
    return sum;
}
sumOfNaturalNumbers(25);
console.log(" is the sum of first 25 natural numbers ==", sumOfNaturalNumbers(25));
