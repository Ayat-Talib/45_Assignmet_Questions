// Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() 
//with a copy of the array of magicians’ names. Because the original array will be unchanged,
//return the new array and store it in a separate array. Call show_magicians() with each array to show that 
//you have one array of the original names and one array with the Great added to each magician’s name.

// Define the show_magicians function
// import { make_great } from "./task42_GreatMegicians";
import { show_magicians } from "./task41_Megicians";

// Define the make_great function
function make_great(magicians: string[]): string[] {
    const newMagicians: string[] = [];
    for (let i = 0; i < magicians.length; i++) {
        newMagicians.push(`The Great ${magicians[i]}`);
    }
    return newMagicians;
}

// Original array of magician's names
const originalMagicians: string[] = ["Merlin", "Houdini", "David Copperfield", "Penn", "Teller"];

// Create a copy of the original array
const copyOfOriginalMagicians: string[] = [...originalMagicians];

// Call make_great function with the copy of the array
const greatMagicians: string[] = make_great(copyOfOriginalMagicians);

// Call show_magicians function to print original magician's names
console.log("Original Magicians:");
show_magicians(originalMagicians);

// Call show_magicians function to print modified magician's names
console.log("\nGreat Magicians:");
show_magicians(greatMagicians);
