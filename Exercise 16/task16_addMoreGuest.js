"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const task14_GuestList_1 = require("./task14_GuestList");
console.log("\n\n Task16 \n ");
//More Guests: You just found a bigger dinner table, so now more space is available.
// Think of three more guests to invite to dinner.
console.log(`I found a more bigger table so I want to add more guest`);
task14_GuestList_1.guestList.unshift("Ifrah");
//inserting at the middle
let index = Math.floor(task14_GuestList_1.guestList.length / 2);
task14_GuestList_1.guestList.splice(index, 0, "Naila");
task14_GuestList_1.guestList.push("Daniya");
for (let guest2 of task14_GuestList_1.guestList) {
    let invitation = `Dear ${guest2},\n` +
        `I would be honored to have you join me for dinner. Your contributions have inspired millions.\n` +
        `Sincerely,Ayat \n`;
    console.log(invitation);
}
console.log(task14_GuestList_1.guestList);
