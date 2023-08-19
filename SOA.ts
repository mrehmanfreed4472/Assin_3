function calculateSum(numbers: number[]): number {
    let sum = 0;
    let index = 0;

    while (index < numbers.length) {
        sum += numbers[index];
        index++;
    }

    return sum;
}

// Example usage
const numberArray = [1, 2, 3, 4, 5];
const totalSum = calculateSum(numberArray);
console.log(`The sum of the numbers is: ${totalSum}`);
