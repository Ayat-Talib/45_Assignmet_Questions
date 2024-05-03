
// Task 14:
//Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite?
// Make a list that includes at least three people you’d like to invite to dinner. Then use your
// list to print a message to each person, inviting them to dinner.
console.log("\n\n Task14 ")
export let guestList: string[] = [
    "Rabia Abrar",
    "Ayesha",
    "Rabia",
    "Samiya",
    "Hiba"
];

for (let guest of guestList) {
    let invitation: string = `Dear ${guest},\n` +
        `I would be honored to have you join me for dinner. Your contributions have inspired millions.\n` +
        `Sincerely,Ayat \n`;

    console.log(invitation);
}
