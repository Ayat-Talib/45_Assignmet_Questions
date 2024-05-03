// Cars: Write a function that stores information about a car in a Object.
//The function should always receive a manufacturer and a model name. 
//It should then accept an arbitrary number of keyword arguments.
// Call the function with the required information and two other name-value pairs, such as a color or an optional feature.
// Print the Object that’s returned to make sure all the information was stored correctly.

interface Car {
    manufacturer: string;
    modelName: string;
    [key: string]: string; // Allow arbitrary key-value pairs
}

function createCar(manufacturer: string, modelName: string, ...options: [string, string][]): Car {
    const car: Car = {
        manufacturer: manufacturer,
        modelName: modelName
    };

    // Add optional key-value pairs
    for (const [key, value] of options) {
        car[key] = value;
    }

    return car;
}

// Call the function with required information and additional key-value pairs
const myCar = createCar("Toyota", "Camry", ["color", "blue"], ["year", "2022"]);

// Print the object to ensure all information was stored correctly
console.log(myCar);
