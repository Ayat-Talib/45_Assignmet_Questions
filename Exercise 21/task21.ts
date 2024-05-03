// They think of something you could store in a TypeScript Object.
//  Write a program that creates Objects containing these items.

// define the interface for different types of item

interface item{
    countries : string[];
    cities : string[];
    mountains : string[];
    rivers : string[];
    languages : string[];
}

let Items : item = {
    mountains: ["Mount Everest", "K2", "Denali"],
    rivers: ["Nile", "Amazon", "Yangtze"],
    countries: ["Pakistan", "India", "Brazil"],
    cities: ["Islamabad", "Lahore", "Karachi"],
    languages: ["English", "Spanish", "Urdu"]
}
console.log("Items in mountains:");
for (const mountain of Items.mountains) {
    console.log(`- ${mountain}`);
}

console.log("\nItems in rivers:");
for (const river of Items.rivers) {
    console.log(`- ${river}`);
}

console.log("\nItems in countries:");
for (const country of Items.countries) {
    console.log(`- ${country}`);
}

console.log("\nItems in cities:");
for (const city of Items.cities) {
    console.log(`- ${city}`);
}

console.log("\nItems in languages:");
for (const language of Items.languages) {
    console.log(`- ${language}`);
}