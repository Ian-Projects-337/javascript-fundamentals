/**** THE MATH MODULE AND THE SPREAD OPERATOR ****/

/** EXAMPLE 1 - CORE MATH METHODS **/

let navigationDistance = 452.87;

// DEMO: Use Math.floor() and Math.ceil() to force rounding the variable down and up,
// storing each value in new variables.
let minBurnRequried = Math.floor(navigationDistance);
let maxSafetyBurn = Math.ceil(navigationDistance);
// DEMO: Log a sentence using the two variables
console.log(`Base Trajectory requires between ${minBurnRequried} and ${maxSafetyBurn} of reaction mmass.`)
// DEMO: Generate a random radiation reading between 0 and 100, then round it,
// storing both in separate variables.
let rawRadiationReading = Math.random() * 100; 
let localizedReading = Math.round(rawRadiationReading);
console.log(`Geiger counter registering localized ambiet static at ${localizedReading} rads`);
// DEMO: Log a sentence using the two variables

/** EXAMPLE 2 - UNPACKING ARRAYS WITH SPREAD **/

const hullStressSensors = [42, 89, 115, 64, 73];
// let brokenMaxCheck = Math.max(hullStressSensors);
// console.log(brokenMaxCheck);

// // DEMO: Try finding the max using the array directly, and log the result.
// console.log(`Direct array argument result is ${brokenMaxCheck}`);
// DEMO: Use the spread operator to pass the elements to Math methods
// that will find both the max and the min, then log them.
let criticalStressPeak = Math.max(...hullStressSensors);
let minimumStressDip = Math.min(...hullStressSensors);
console.log(`Critical stress peak is ${criticalStressPeak} and ${minimumStressDip}`)
// DEMO: Make a git commit!

/* 
    Follow up with additional exercises after demo for hands-on practice 
    with problem-solving and coding!
*/
