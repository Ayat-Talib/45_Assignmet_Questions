// Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. 
//The function should have one parameter that collects as many items as the function call provides,
//and it should print a summary of the sandwich that is being ordered. Call the function three times,
//using a different number of arguments each time.

function orderSandwich(...items: string[]): void {
    console.log("Sandwich Order:");
    if (items.length === 0) {
        console.log("No items selected. Please specify at least one item for the sandwich.");
    } else {
        console.log("Items:");
        for (const item of items) {
            console.log("- " + item);
        }
    }
    console.log("------------------");
}

// Call the function three times with different number of arguments
orderSandwich("Turkey", "Cheese", "Lettuce", "Tomato");
orderSandwich("Ham", "Swiss Cheese");
orderSandwich("Veggie Patty", "Avocado", "Spinach", "Tomato", "Onion");
