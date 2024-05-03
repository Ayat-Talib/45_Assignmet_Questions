"use strict";
// Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. 
// Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
function make_shirt(size = 'large', message = 'I love TypeScript') {
    console.log(`Creating a ${size}-sized shirt with the message: "${message}"`);
}
// Creating a large shirt with the default message
make_shirt();
// Creating a medium shirt with the default message
make_shirt('medium');
// Creating a small shirt with a different message
make_shirt('small', 'Chaajao!');
