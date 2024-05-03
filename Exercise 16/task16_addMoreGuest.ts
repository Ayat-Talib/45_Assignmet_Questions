import { guestList } from "./task14_GuestList";
console.log("\n\n Task16 \n ")
//More Guests: You just found a bigger dinner table, so now more space is available.
// Think of three more guests to invite to dinner.
console.log(`I found a more bigger table so I want to add more guest`);

guestList.unshift("Ifrah")
//inserting at the middle
let index : number = Math.floor(guestList.length / 2) ;
guestList.splice(index, 0, "Naila");
guestList.push("Daniya");
for(let guest2 of guestList){
    let invitation : string = `Dear ${guest2},\n` +
    `I would be honored to have you join me for dinner. Your contributions have inspired millions.\n` +
    `Sincerely,Ayat \n`;
    console.log(invitation)
}

console.log(guestList)
