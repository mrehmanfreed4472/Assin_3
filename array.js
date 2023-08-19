"use strict";
var a = 0;
while (a < 10) {
    console.log(a);
    a = a + 2;
}
//Alternate method
console.log("------------------Alternate method-----------------");
{
    let b = 0;
    let c = 0;
    while (b < 10) {
        console.log(b);
        b = b + 2;
        c++;
    }
    b++;
}
