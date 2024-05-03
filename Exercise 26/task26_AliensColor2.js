"use strict";
// Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
// • If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.
Object.defineProperty(exports, "__esModule", { value: true });
// • If the alien’s color isn’t green, print a statement that the player just earned 10 points.
// • Write one version of this program that runs the if block and another that runs the else block.
//running the if block
const task25_AliensColor1_1 = require("./task25_AliensColor1");
if (task25_AliensColor1_1.alien_color === "green") {
    console.log("player just earned 5 points for shooting the alien");
}
else {
    console.log("player just earned 10 points");
}
