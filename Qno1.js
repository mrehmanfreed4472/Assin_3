"use strict";
function insertValueAtIndex(arr, index, value) {
    arr.splice(index, 0, value); // Insert the value at the specified index
    return arr;
}
// Example usage
const originalArray = [1, 2, 3, 4, 5];
const modifiedArray = insertValueAtIndex(originalArray, 2, 99);
console.log(modifiedArray);
