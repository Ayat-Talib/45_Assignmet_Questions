"use strict";
// City Names: Write a function called city_country() that takes in the name of a city and its country.
// The function should return a string formatted like this:
// "Lahore, Pakistan"
// Call your function with at least three city-country pairs, and print the value that’s returned.
function city_country(city, country) {
    return `${city}, ${country}`;
}
// Calling the function with city-country pairs
const Pair1 = city_country('Lahore', 'Pakistan');
const Pair2 = city_country('Paris', 'France');
const Pair3 = city_country('New York', 'United States');
// Printing the returned values
console.log(Pair1);
console.log(Pair2);
console.log(Pair3);
