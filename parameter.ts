function factorial(n: number): number {
    if(n<0){
        throw new Error("Number must be positive!!");
    }
    let result = 1;
    let current =0;
    while(current>0){
        result = result * current;
        current--;
    }
    return result;
}
const num = 5;
const result = factorial(num);
console.log(`The factorial of ${num} is ${result}`);