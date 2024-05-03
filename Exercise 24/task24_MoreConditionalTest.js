"use strict";
let string1 = 'hello';
let string2 = 'world';
let num1 = 20;
let num2 = 30;
let array = [1, 2, 3, 4, 5];
// Tests for equality and inequality with strings
console.log("Is string1 equal to 'hello'? I predict True.");
console.log(string1 === 'hello');
console.log("Is string1 not equal to string2? I predict True.");
console.log(string1 !== string2);
// Tests using the lower case function
console.log("Is string1 lowercase equal to 'hello'? I predict True.");
console.log(string1.toLowerCase() === 'hello');
console.log("Is string2 lowercase not equal to 'WORLD'? I predict True.");
console.log(string2.toLowerCase() !== 'WORLD');
// Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
console.log("Is num1 equal to 20? I predict True.");
console.log(num1 === 20);
console.log("Is num2 not equal to 20? I predict True.");
console.log(num2 !== 20);
console.log("Is num1 greater than num2? I predict False.");
console.log(num1 > num2);
console.log("Is num1 less than num2? I predict True.");
console.log(num1 < num2);
console.log("Is num2 greater than or equal to 30? I predict True.");
console.log(num2 >= 30);
console.log("Is num1 less than or equal to 20? I predict True.");
console.log(num1 <= 20);
// Tests using "and" and "or" operators
console.log("Is num1 greater than 10 and num2 less than 40? I predict True.");
console.log(num1 > 10 && num2 < 40);
console.log("Is num1 greater than 10 or num2 greater than 40? I predict True.");
console.log(num1 > 10 || num2 > 40);
// Test whether an item is in an array
console.log("Is 3 in the array? I predict True.");
console.log(array.includes(3));
// Test whether an item is not in an array
console.log("Is 6 not in the array? I predict True.");
console.log(!array.includes(6));
