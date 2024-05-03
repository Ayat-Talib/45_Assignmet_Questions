"use strict";
console.log("\nTask18 \n ");
// Define the array of places
const placesToVisit = ['Tokyo', 'Paris', 'New York', 'Sydney', 'Rome'];
// Print the array in its original order
console.log("Original Order:", placesToVisit);
// Print the array in alphabetical order without modifying the actual list
const sortedAlphabetically = [...placesToVisit].sort();
console.log("Alphabetical Order:", sortedAlphabetically);
// Show that the original array is still in its original order
console.log("Original Order After Sorting:", placesToVisit);
// Print the array in reverse alphabetical order without changing the order of the original list
const sortedReverseAlphabetically = [...placesToVisit].sort((a, b) => b.localeCompare(a));
console.log("Reverse Alphabetical Order:", sortedReverseAlphabetically);
// Show that the original array is still in its original order
console.log("Original Order After Reverse Sorting:", placesToVisit);
// Reverse the order of your list. Print the array to show that its order has changed
placesToVisit.reverse();
console.log("Reversed Order:", placesToVisit);
// Reverse the order of your list again. Print the list to show it’s back to its original order
placesToVisit.reverse();
console.log("Original Order After Double Reverse:", placesToVisit);
// Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed
placesToVisit.sort();
console.log("Sorted Alphabetically:", placesToVisit);
// Sort your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed
placesToVisit.sort((a, b) => b.localeCompare(a));
console.log("Sorted Reverse Alphabetically:", placesToVisit);
