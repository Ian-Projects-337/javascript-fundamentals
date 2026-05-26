 /**** ANONYMOUS FUNCTIONS ****/

/** EXAMPLE 1 - IMMEDIATE IN-PLACE EXECUTION **/

// What you already know: an entire function definition can be stored under an alias
const logScannerReport = sector => console.log(`Internal scanner pinged at ${sector}.`);

// The alias is used to call the reusable function
logScannerReport("Sector Delta");
logScannerReport("Sector Alpha");

// DEMO: Execute the same function once without naming it
(sector => console.log(`Internal scanner pinged at ${sector}.`))("Sector Beta");
/** EXAMPLE 2 - A SIMPLE IN-PLACE USE CASE **/

const blastOff = () => console.log("🚀 Thrusters ignited! Capsule has cleared the launchpad.");

console.log("Initializing countdown sequence... 3... 2... 1...");

// DEMO: Call JavaScript's built-in timer tool: setTimeout()
// Argument 1: A truly anonymous, single-use arrow function written in-place.
// Argument 2: The delay time in milliseconds (3000ms = 3s).

// DEMO Use setTimeout() for the full countdown and a truly anonymous, single-use function
setTimeout(blastOff,5000);
// DEMO: Make a git commit!
setTimeout(() => console.log("🚀 We have lift off! Capsule has cleared the launchpad."),3000)
/* 
    Follow up with additional exercises after demo for hands-on practice 
    with problem-solving and coding!
*/

