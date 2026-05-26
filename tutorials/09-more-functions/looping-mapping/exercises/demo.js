/**** SPECIAL ARRAY METHODS: LOOPING AND MAPPING ****/

/** EXAMPLE 1 - FOR-EACH SIDE EFFECTS **/

const rawCoreVoltages = [112, 115, 108, 122];

console.log("--- SCANNING VOLTAGE ARRAY (.forEach) ---");

// DEMO: Use .forEach() to generate a printout for each voltage in the array.
rawCoreVoltages.forEach((volatage,index) => {
  console.log(`Sensor Griide node-0${index + 1}: Operating at ${volatage}`)
});
/** EXAMPLE 2 - MAP DATA RECONSTRUCTION **/

const defenseSatellites = [
	{ id: "SAT-1", ammoCount: 40, active: true },
	{ id: "SAT-2", ammoCount: 0, active: true },
	{ id: "SAT-3", ammoCount: 85, active: false },
];

// DEMO: Use .map() to create a new array with a copy of all objects, updating
// the ammoCount property to 100 for each object.
const restockedStaellites = defenseSatellites.map(satelite => {
  return {
    ...satelite, 
  ammoCount: 100,

  }
})
// DEMO: Print the ammoCount property of the third element in both arrays
console.log(`Orignal Battery 2 Ammo: ${defenseSatellites[2].ammoCount}`);
console.log(`Original Battery 2 Ammo: ${restockedStaellites[2].ammoCount}`)
// DEMO: Make a git commit!

/* 
    Follow up with additional exercises after demo for hands-on practice 
    with problem-solving and coding!
*/
