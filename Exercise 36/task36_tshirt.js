"use strict";
// T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt.
// The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.
Object.defineProperty(exports, "__esModule", { value: true });
exports.make_shirt = void 0;
function make_shirt(size, message) {
    console.log(`Creating a ${size}-sized shirt with the message: "${message}"`);
}
exports.make_shirt = make_shirt;
make_shirt('XL', "Chaajao");
