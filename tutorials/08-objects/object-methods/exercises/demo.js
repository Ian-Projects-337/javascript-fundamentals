/**** OBJECT METHODS & CONTEXT ****/

/** EXAMPLE 1 - DECLARED SEPARATELY, ASSIGNED BY REFERENCE **/

function fireThruster() {
	console.log("Pumping water plasma... Thrusters firing! 🚀");
}

const defensiveDrone = {
	modelId: "Aegis-04",
	ammoCount: 50,
	// DEMO: Assign the function by reference
  activatePropulsion: fireThruster,
};

// DEMO: Invoke the method directly off the object structure
defensiveDrone.activatePropulsion();
/** EXAMPLE 2 - INLINE METHODS & THE 'THIS' KEYWORD **/

const lifeSupportSystem = {
	sector: "Habitation Deck B",
	oxygenPercentage: 85,
	criticalThreshold: 90,
	// DEMO: Declare a method directly inline inside the object configuration
	// DEMO: Declare a method that can modify sister properties
  evaluateAtmosphere: function () {
    if (this.oxygenPercentage < this.criticalThreshold) {
      return `ALERT: ${this.sector} oxygen levels have dropped to ${this.oxygenPercentage}`
    }else {
      return `${this.sector} atospheric balance nominal at ${this.oxygenPercentage}`
    }
  },
  injectPureOxyygen: function (tonnage) {
    this.oxygenPercentage += tonnage;
    console.log(`Injected ${tonnage} of oxygen mass into internal ducts.`)
  }
};

// DEMO: Execute evaluation
console.log(lifeSupportSystem.evaluateAtmosphere());
// DEMO: Modify state via method behavior, then re-evaluate
lifeSupportSystem.injectPureOxyygen(10);
console.log(lifeSupportSystem.evaluateAtmosphere());

// DEMO: Make a git commit!

/* 
    Follow up with additional exercises after demo for hands-on practice 
    with problem-solving and coding!
*/
