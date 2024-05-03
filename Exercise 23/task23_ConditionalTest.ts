// Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test.
//  Your code should look something like this:

import { createDiffieHellmanGroup } from "crypto";

// let car = 'subaru';

// console.log("Is car == 'subaru'? I predict True.")

// console.log(car == 'subaru')

// • Look closely at your results, and make sure you understand why each line evaluates to True or False.

// • Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.


let x = 5;
let y = 10;

// Test 1: Check if x is equal to 5
console.log("Is x equal to 5? I predict True.");
console.log(x == 5);

// Test 2: Check if y is not equal to 10
console.log("Is y not equal to 10? I predict False.");
console.log(y != 10);

// Test 3: Check if x is less than y
console.log("Is x less than y? I predict True.");
console.log(x < y);

// Test 4: Check if y is greater than or equal to 10
console.log("Is y greater than or equal to 10? I predict True.");
console.log(y >= 10);

// Test 5: Check if x is greater than or equal to y
console.log("Is x greater than or equal to y? I predict False.");
console.log(x >= y);

// Test 6: Check if the type of x is 'number'
console.log("Is the type of x 'number'? I predict True.");
console.log(typeof x === 'number');

// Test 7: Check if the type of y is 'string'
console.log("Is the type of y 'string'? I predict False.");
console.log(typeof y === 'string');

// Test 8: check if y is greater then 30
console.log("Is y is greater then 30? I predict false")
console.log(y >= 30)

// test 9: check if x is greater then 20
console.log("Is x is greater then 20? I predict true")
console.log(x >= 20)