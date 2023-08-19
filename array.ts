var a: number = 0;
while (a < 10) {
    console.log(a);
    a = a + 2;
}
//Alternate method
console.log("------------------Alternate method-----------------");
{
let b: number = 0;
let c: number = 0;
while (b < 10) {
    console.log(b);
    b = b + 2;
    c++;
}
b++;
}