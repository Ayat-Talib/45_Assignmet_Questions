"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log("\nTask17 \n ");
const task14_GuestList_1 = require("./task14_GuestList");
//Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, 
//and you have space for only two guests.
//Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
//Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, 
//print a message to that person letting them know you’re sorry you can’t invite them to dinner.
//Print a message to each of the two people still on your list, letting them know they’re still invited.
//Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty
// list at the end of your program.
console.log("Unfortunately, the dinner table won't arrive in time, so I can only invite two people for dinner.");
while (task14_GuestList_1.guestList.length > 2) {
    let Remove_guest = task14_GuestList_1.guestList.pop();
    console.log(`Sorry, ${Remove_guest}, I can't invite you to dinner this time.`);
}
// Invite the remaining two guests
task14_GuestList_1.guestList.forEach(guest => {
    console.log(`Dear ${guest}, you're still invited to the dinner.`);
});
task14_GuestList_1.guestList.pop();
task14_GuestList_1.guestList.pop();
console.log(`Remaining guest list: ${task14_GuestList_1.guestList}`);
