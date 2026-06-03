/**** DESTRUCTURING OBJECTS ****/

/** EXAMPLE 1 - THE TRADITIONAL UNPACKING ROUTINE **/

const supplyCrate = {
  crateId: "RG3-917",
  fuelType: "Hydrogen Gas",
  crateWeight: 450,
  manufacturer: "ACME Ltd.",
  securityClearance: "Level 2",
};

// Separate declarations with multiple references to access properties
const fuel = supplyCrate.fuelType;
const weight = supplyCrate.crateWeight;
const company = supplyCrate.manufacturer;

console.log(`Old System: Loading ${fuel} weighing ${weight}kg from ${company}.`);

/** EXAMPLE 2 - THE DESTRUCTURING CLAW **/

// DEMO: Destructure properties directly into variables matching the key names
const { fuelType, crateWeight, securityClearance } = supplyCrate;
// DEMO: Log statements using new variables
console.log(`Mordern System: Loading ${fuelType} weighting ${crateWeight}`)
/** EXAMPLE 3 - FLEXIBLE NAMING **/

// DEMO: Change the name while you destructuring and log a statement.
const { crateId: id } = supplyCrate
console.log(`Crate ${id} has been delivered.`)
// DEMO: Make a git commit!

/* 
    Follow up with additional exercises after demo for hands-on practice 
    with problem-solving and coding!
*/
