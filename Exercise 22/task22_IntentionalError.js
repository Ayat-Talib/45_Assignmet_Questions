"use strict";
// Intentional Error: If you haven’t received an array index error 
// in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error.
// Make sure you correct the error before closing the program.
// Define an array of numbers
const numbers = [10, 20, 30, 40, 50];
// Attempt to access an element at an invalid index (intentional error)
let invalidIndes = 10;
console.log(`Trying to access element at index ${invalidIndes}:`);
console.log(numbers[invalidIndes]); // This will throw an error
// Correct the error by checking the array length before accessing
if (invalidIndes < numbers.length) {
    console.log(`Element at index ${invalidIndes}: ${numbers[invalidIndes]}`);
}
else {
    console.log(`Invalid index: ${invalidIndes} is out of range for the array.`);
}
