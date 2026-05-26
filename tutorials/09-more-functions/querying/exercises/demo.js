/**** SPECIAL ARRAY METHODS: QUERYING ****/

/** EXAMPLE 1 - FIND AND FINDINDEX LOCATORS **/

const tacticalTargets = [
	{ id: "TRG-101", classification: "Scout Drone", threatLevel: 2 },
	{ id: "TRG-202", classification: "Heavy Frigate", threatLevel: 9 },
	{ id: "TRG-303", classification: "Cruiser Fleet", threatLevel: 10 },
	{ id: "TRG-404", classification: "Fighter Escort", threatLevel: 4 },
];

console.log("Priority Target Profile Identified:");
// DEMO: Use .find() to locate the object with the highest priority threat target
// and log it.
const highThreatTarget = tacticalTargets.find(target => target.threatLevel >=9);
console.log(highThreatTarget);
// DEMO: Use .findIndex() to find out exactly where the rogue 'TRG-404' drone sits
// inside our system index array and log it
const targetIndex = tacticalTargets.findIndex(target => target.id === "TRG-404");
console.log(targetIndex);
/** EXAMPLE 2 - FILTER SUB-ARRAY EXTRACTION **/
const lowRiskTargets = tacticalTargets.filter(target => target.threatLevel < 5);
//console.log(lowRiskTargets);
// DEMO: Use .filter() to create a collection subset containing only targets safe
// enough for an escort drone to engage (Threat < 5)

console.log("\n--- COMBAT MATRIX ENVELOPE: LOGGING ENGAGEABLE OBJECTS ---");

// DEMO: Use .forEach() to print each of the low risk targets on a separate line.
lowRiskTargets.forEach(target => console.log(target));
// DEMO: Make a git commit!

/* 
    Follow up with additional exercises after demo for hands-on practice 
    with problem-solving and coding!
*/
