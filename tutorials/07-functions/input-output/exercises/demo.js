/**** FUNCTION INPUT & OUTPUT ****/

/** EXAMPLE 1 - PARAMETERS & ARGUMENTS **/

// DEMO: Define a function to greet a crew member'crewName' is the parameter (the variable placeholder)
// parameter part of the definition of the function
function welcomeCrewMember(crewName) {
  console.log(`Welcome back to the bridge, ${crewName}`)
}
//argument what you are input to the function
welcomeCrewMember("Holden");
welcomeCrewMember("Alice");

// DEMO: Invoke the function twice with two different names.

/** EXAMPLE 2 - MULTIPLE INPUTS **/
function calculateVelocity(distance,time) {
  console.log(`calculating speed for ${distance} meters of ${time} seconds...`);
  let speed = distance / time;
  console.log(`Velocity ${speed} m/s`);
}
calculateVelocity(100,10);
// DEMO: Define a function that accepts distance and time. It should calculate velocity
// and also print updates to the console.

// DEMO: Call the function, passing in 100 meters and 10 seconds as arguments

/** EXAMPLE 3 - RETURN VALUES **/

// DEMO: Define a function that accepts amounts of hydrogen and oxygen and returns the total
function synthesizeWaterReactionMass(hydrogenTon,oxygenTon) {
  let waterCompound = hydrogenTon + oxygenTon;
  // after you use return it ends the function anything beneath it won't show
  return waterCompound;
}
let currentReactionMass = synthesizeWaterReactionMass(50,25);
console.log(`Drive reserves updated: ${currentReactionMass} metric tons of H20 loaded.`);
// What happens if you code a message to print after the line with the return statement?

// DEMO: Call the function and pass in 50t of hydrogen and 25t of oxygen
// Store the result in a new variable and then print a sentence using it

// DEMO: Make a git commit!

/* 
    Follow up with additional exercises after demo for hands-on practice 
    with problem-solving and coding!
*/
