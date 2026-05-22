/**** ACCESSING & MODIFYING PROPERTIES ****/

/** EXAMPLE 1 - DOT VS BRACKET BASICS **/

const cargoBay = {
	manifestId: "CB-04",
	"containment-status": "SECURE",
	tonnage: 120,
};

// DEMO: Use dot notation to modify the tonnage
cargoBay.tonnage = 145;
// DEMO: Use dot notation to add a technician property
cargoBay.Technician = "Amos";
// DEMO: Use dot notation to form a sentence using properties of the object
// and log it to the console.
console.log(cargoBay);
console.log(`${cargoBay.manifestId} holds ${cargoBay.tonnage}t of cargo`)
// DEMO: Use bracket notation to update the containment status
cargoBay["containment-status"] = "VENTING";
// DEMO: Use bracket notation to print an alert about the containment status
console.log(`Alert Status: ${cargoBay["containment-status"]}`);
/** EXAMPLE 2 - DYNAMIC VARIABLE LOOKUPS **/

const engineCore = {
	temperature: 3200,
	pressure: 150,
	radiation: 12,
};

let statRequested = "pressure";

// DEMO: What happens if we try to use dot notation here?
console.log(engineCore.statRequested);
// DEMO: Use the dynamic key to get the stat
console.log(engineCore[statRequested]);
// DEMO: Make a git commit!

/* 
    Follow up with additional exercises after demo for hands-on practice 
    with problem-solving and coding!
*/
