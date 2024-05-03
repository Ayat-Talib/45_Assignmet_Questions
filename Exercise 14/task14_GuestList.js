"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.guestList = void 0;
// Task 14:
//Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite?
// Make a list that includes at least three people you’d like to invite to dinner. Then use your
// list to print a message to each person, inviting them to dinner.
console.log("\n\n Task14 ");
exports.guestList = [
    "Rabia Abrar",
    "Ayesha",
    "Rabia",
    "Samiya",
    "Hiba"
];
for (let guest of exports.guestList) {
    let invitation = `Dear ${guest},\n` +
        `I would be honored to have you join me for dinner. Your contributions have inspired millions.\n` +
        `Sincerely,Ayat \n`;
    console.log(invitation);
}
