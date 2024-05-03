// Task 15:
//Changing Guest List: You just heard that one of your guests can’t make the dinner,
// so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
import {guestList } from "./task14_GuestList";

console.log("\n\n Task15 ")
console.log(`${guestList[2]} can't make dinner`);
guestList[2] = "Fathima"
for (let guest1 of guestList){
    let invitation : string = `Dear ${guest1},\n` +
    `I would be honored to have you join me for dinner. Your contributions have inspired millions.\n` +
    `Sincerely,Ayat \n`;
    console.log(invitation)
   
}
