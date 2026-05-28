/**** COMPLEX OBJECTS & MUTATION ****/

/** EXAMPLE 1 - COMPLEX DATA STRUCTURE **/

const gunshipProfile = {
  vesselName: "Rocinante",
  classSpecification: {
    type: "Corvette-class",
    manufacturer: "MCRN Shipyards",
  },
  weaponLoadout: ["PDC Railguns", "Torpedo Launchers"],
};

// DEMO: Access nested layers using chained references
console.log(`The ${gunshipProfile.vesselName} is a ${gunshipProfile.classSpecification.type} and with ${gunshipProfile.weaponLoadout[0]}`)
/** EXAMPLE 2 - SHALLOW COPY MUTATION RISK **/

// DEMO: Create a shallow copy via the spread operator
const shallowwClone = { ...gunshipProfile };
// DEMO: Change a top-level primitive and test both the original and the clone
shallowwClone.vesselName = "Contynel"
console.log(gunshipProfile.vesselName);
console.log(shallowwClone.vesselName);
// DEMO: Change a nested value of the clone and test to see if original was mutated
shallowwClone.classSpecification.type = "Heavy Frigate"
console.log(gunshipProfile.classSpecification.type);
/** EXAMPLE 3 - THE TRUE DEEP CLONE SOLUTIONS **/
const originalMedicalLab = {
  facility: "Med-Bay Alpha",
  inventory: ["Stitcher-Gels", "Rad-Meds"],
};

// DEMO: Serialize to a string and parse to create a new deep copy
const deepClone = JSON.parse(JSON.stringify(originalMedicalLab))

// DEMO: Add an element to the nested array
deepClone.inventory.push("Nanite Swares");
// DEMO: Compare modified inventory against the original inventory
console.log(originalMedicalLab.inventory);
console.log(deepClone.inventory);
// DEMO: Make a git commit!

/* 
    Follow up with additional exercises after demo for hands-on practice 
    with problem-solving and coding!
*/
