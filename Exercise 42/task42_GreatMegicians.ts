// Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great()
// that modifies the array of magicians by adding the phrase the Great to each magician’s name.
// Call show_magicians() to see that the list has actually been modified.

// Define the show_magicians function
function show_magicians(magicians: string[]): void {
    for (const magician of magicians) {
        console.log(magician);
    }
}

// Define the make_great function
export function make_great(magicians: string[]): void {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = `The Great ${magicians[i]}`;
    }
}

// Array of magician's names
const magicians: string[] = ["Merlin", "Houdini", "David Copperfield", "Penn", "Teller"];

// Call show_magicians function to print magician's names before modification
console.log("Magician's Names:");
show_magicians(magicians);

// Call make_great function to modify magician's names
make_great(magicians);

// Call show_magicians function again to print modified magician's names
console.log("\nGreat Magician's Names:");
show_magicians(magicians);
