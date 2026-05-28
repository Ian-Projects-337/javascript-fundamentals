/**** HELPER FUNCTIONS ****/

/** EXAMPLE **/

// DEMO: Define a function that calculates a metric conversion
function celciusToKelvin(celsius) {
  return celsius + 273.15;
}
// DEMO: Define a function that checks if a value crosses a safety threshold
function isOverHeating(kelvinTemp) {
  const CRITICAL_TEMP_K = 3000;
  return kelvinTemp > CRITICAL_TEMP_K
}
// DEMO: Write a primary function that assesses the reactor safety
// and prints a report with either a warning or a nominal message
function runReactorCheck(currentCelcius) {
  let tempInKelvin = celciusToKelvin(currentCelcius);
  let threatDetected = isOverHeating(tempInKelvin);

  if (threatDetected) {
    console.log(`CRITICAL: Core is at ${tempInKelvin} initiating containment`)
  } else {
    console.log(`Core nominal. Operating temperature ${tempInKelvin}`)
  }
}
// DEMO: Call the primary function
runReactorCheck(2800);
runReactorCheck(1200);
// DEMO: Make a git commit!

/* 
    Follow up with additional exercises after demo for hands-on practice 
    with problem-solving and coding!
*/
