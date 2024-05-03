"use strict";
//Task 6:Stripping Names: Store a person’s name, and include
// some whitespace characters at the beginning and end of the name.
// Make sure you use each character combination, "\t" and "\n", at least once.
// Print the name once, so the whitespace around the name is displayed. 
//Then print the name after striping the white spaces.
console.log("\n\nTask 6");
let PP_name = "   \t \n Ayat Talib    \t \n";
console.log("Before Stripping :", PP_name);
let strippedName = PP_name.trim();
console.log("After Stripping :", strippedName);
