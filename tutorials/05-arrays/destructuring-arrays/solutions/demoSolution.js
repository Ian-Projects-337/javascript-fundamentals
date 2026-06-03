/**** DESTRUCTURING ARRAYS: SOLUTION ****/

/*
    When you destructure an array, you extract data based on index positions 
    rather than name keys. Inside the square brackets [ ], you create whatever 
    variable names you want. JavaScript will automatically assign the element 
    at index 0 to the first variable, the element at index 1 to the next
    variable, and so on, moving left to right down the line.
*/

/** EXAMPLE 1 - POSITION-BASED EXTRACTION **/

const flightPlan = ["Earth Orbit", "Asteroid Belt", "Jupiter Core"];

// We choose our own variable names. They map strictly to positions 0, 1, and 2.
const [origin, layover, destination] = flightPlan;

console.log(`---FLIGHT PLAN-------------------------
Origin: ${origin}
Layover: ${layover}
Final Destination: ${destination}
`);

/** EXAMPLE 2 - SKIPPING UNWANTED CARGO **/

const crew = ["Captain Holden", "Mechanic Amos", "Pilot Alex"];

// If we only need to reference the Captain (index 0) and the Pilot (index 2),
// we can leave an empty space between commas to skip the Mechanic (index 1)!
const [captain, , pilot] = crew;

console.log(`\nFlight Deck Alert: ${captain} and ${pilot} report to the bridge.`);
