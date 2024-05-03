"use strict";
// Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(),
//  which prints the name of each magician in the array.
Object.defineProperty(exports, "__esModule", { value: true });
exports.magicians = exports.show_magicians = void 0;
// Array of magician's names
function show_magicians(magicians) {
    for (const magician of magicians) {
        console.log(magician);
    }
}
exports.show_magicians = show_magicians;
exports.magicians = ["Merlin", "Houdini", "David Copperfield", "Penn", "Teller"];
// Call the show_magicians function to print magician's names
show_magicians(exports.magicians);
