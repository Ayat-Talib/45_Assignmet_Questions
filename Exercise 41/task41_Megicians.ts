// Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(),
//  which prints the name of each magician in the array.

// Array of magician's names

export function show_magicians(magicians : string[] ): void{
    for (const magician of magicians){
        console.log(magician)
    }
}
export const magicians: string[] = ["Merlin", "Houdini", "David Copperfield", "Penn", "Teller"];

// Call the show_magicians function to print magician's names
show_magicians(magicians);
