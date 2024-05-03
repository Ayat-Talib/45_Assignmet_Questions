"use strict";
// Alien Colors #1: Imagine an alien was just shot down in a game. Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.
// • Write an if statement to test whether the alien’s color is green. If it is, print a message that the player just earned 5 points.
Object.defineProperty(exports, "__esModule", { value: true });
exports.alien_color = void 0;
// • Write one version of this program that passes the if test and another that fails. (The version that fails will have no output.)
//version Passes
exports.alien_color = "green";
if (exports.alien_color === "green") {
    console.log("player just earned 5 points!!");
}
// version faills 
exports.alien_color = "red";
if (exports.alien_color === "green") {
    console.log("player just earned 5 points!!");
}
