/**** DESTRUCTURING ARRAYS: PRACTICE SOLUTION ****/

/*
    Practice extracting array elements based on their structural order 
    and skipping unneeded slots.
*/

/** EXERCISE 1: DEPLOYING THE ESCAPE PODS **/

const escapePods = ["Pod Alpha", "Pod Bravo", "Pod Charlie"];

/*
    Destructure the first two pods from the 'escapePods' array into 
    two new variables named 'primaryPod' and 'secondaryPod'. 
    Log a message stating that those two specific pods are ready.
*/
const [primaryPod, secondaryPod] = escapePods;

console.log(`Emergency Status: ${primaryPod} and ${secondaryPod} are primed for launch.`);


/** EXERCISE 2: EXTRACTING THE REAR CARGO **/

const sectorSignals = ["Friendly Beacon", "Static Noise", "Unknown Distress Signal"];

/*
    Destructure the 'sectorSignals' array to pull out ONLY the third item 
    at index 2. Save it into a variable named 'emergencySignal' by using commas 
    to skip the first two values.
*/
const [, , emergencySignal] = sectorSignals;

console.log(`\nRadio Receiver: Picked up an ${emergencySignal}!`);
