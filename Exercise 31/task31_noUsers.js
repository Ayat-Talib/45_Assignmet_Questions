"use strict";
// No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!
Object.defineProperty(exports, "__esModule", { value: true });
// • Remove all of the usernames from your array, and make sure the correct message is printed.
const task30_HelloAdmin_1 = require("./task30_HelloAdmin");
if (task30_HelloAdmin_1.userList.length > 0) {
    for (let user of task30_HelloAdmin_1.userList) {
        if (user === "Admin") {
            console.log(" Hello admin, would you like to see a status report?");
        }
        else {
            console.log(`Hello ${user}!!, `);
        }
    }
}
else {
    console.log("We need to find some users!");
}
