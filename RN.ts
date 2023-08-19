{function removeNegativeNumber(numbers: number[]):number[]{
    return numbers.filter(num => num >= 0);
}
var numbers = [1, -2, 3, -4, 5, -6, 7, -8, 9, -10];
var filterArray = removeNegativeNumber(numbers);
console.log(numbers);
console.log(filterArray);}

console.log("===================================");
{
function removeNegativeNumber1(numbers: number[]):number[]{
    const nonnegativeNumbers:number[] = [];
    for(const num of numbers){
        if (num>0){
            nonnegativeNumbers.push(num);
        }
    }
    return nonnegativeNumbers;
}
var numbers = [1, -2, 3, -4, 5, -6, 7, -8, 9, -10];
var filterArray = removeNegativeNumber1(numbers);
console.log(numbers);
console.log(filterArray);
}