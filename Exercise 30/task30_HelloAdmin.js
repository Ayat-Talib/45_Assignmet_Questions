"use strict";
// Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will 
//print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:
// • If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?
Object.defineProperty(exports, "__esModule", { value: true });
exports.userList = void 0;
// • Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.
exports.userList = ['Admin', 'Fatima', 'Asma', 'Rabia', 'Samiya', "Faiza"];
for (let i = 0; i < exports.userList.length; i++) {
    if (exports.userList[i] === "Admin") {
        console.log(" Hello admin, would you like to see a status report?");
    }
    else {
        console.log(`Hello ${exports.userList[i]}, thank you for logging in again.`);
    }
}
