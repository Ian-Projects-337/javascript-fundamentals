/**** INTRODUCTION TO OBJECTS ****/

/** EXAMPLE 1 - DECLARATION & INITIALIZATION **/

// DEMO: Create a structured profile for a ship using Key-Value pairs
const ShipProfile = {
  name: "Rocinante",
  classType: "Corvette-class Gunship",
  crewCapacity: 4,
  isDriveActive: false
};
// DEMO: Print the object to the console
console.log(ShipProfile);
/** EXAMPLE 2 - THE MEMORY REFERENCE PARADOX **/

const sectorA_Scanner = { oxygenLevel: 98 };
const sectorB_Scanner = { oxygenLevel: 98 };

// DEMO: Test if the two objects are equal
console.log(sectorA_Scanner === sectorB_Scanner);
const scanner01 = sectorA_Scanner;
console.log(scanner01 === sectorA_Scanner);
// DEMO: Test if scanner01 is a clone/copy

// DEMO: Make a git commit!

/* 
    Follow up with additional exercises after demo for hands-on practice 
    with problem-solving and coding!
*/
