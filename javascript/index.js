// let currentLightColor = 'green' || 'red' || 'yellow';
// currentLightColor = 'yellow';


// if(currentLightColor === 'green') {
//   console.log('The light is ' + currentLightColor + '.');
//   console.log('It is safe to go');
// } else if (currentLightColor === 'red' || currentLightColor === 'yellow') {
//   console.log('The light is ' + currentLightColor + '.');
//   console.log('Slow down and come to a stop');
// } else {
//   console.log('You are not in this universe');
// }

// ###############################Spacer########################

// PART 1
// const users = [
//   { name: "Bobby", hobby: "Skateboarding" },
//   { name: "Kyle", hobby: "Music" },
//   { name: "Sarah", hobby: "Hang-gliding" },
//   { name: "Jose", hobby: "Snowboarding" },
//   { name: "Phillip" },
//   { name: "Charles", hobby: "Rock Climbing" },
//   { name: "Tabatha", hobby: "Art" },
// ];

// function logUser(user) {
//   if(!user.hobby) {
//     console.log(`Hi, ${user.name}.`);
//   } else {
//     console.log(`Hi, ${user.name}. I'm stoked you enjoy ${user.hobby}`);
//   }
// }

// users.forEach(user => {
//   logUser(user);
// });


// PART 2
// let userInputCelsius = "100";
// let degreesK = Number(userInputCelsius) + 273.15;

// console.log('Degrees Kelvin:', degreesK); // Expected: 373.15
// console.log(typeof degreesK);

// ###############################Spacer########################

/*
Directions:
1. Fix syntax errors.
2. Run the following code as-is and read the error message.
3. Fix the mistake, and then re-run the code to check it.
Expected Output:
=> WARNING: Insufficient energy!
*/

// let readyToSkate = false;
// let energyLevel = 18000;

// if (energyLevel >= 24000) {
//    console.log("Energy level is a go!");
//    readyToSkate = true;
// } else {
//    console.log("WARNING: Insufficient energy!");
//    readyToSkate = false;
// }

/*
Directions:
1. The block of code has a few syntax errors.
2. Run the code as-is to find the mistakes.
💡 Tip:
Only one error will be flagged at a time.
Fix that ONE problem, and then re-run the code to check your work.
Avoid trying to fix multiple issues at once.
Expected Output:
=> Crew & cameraBattery is a go!
=> Grab your skateboard...
=> Ready...
=> Set...
=> SKATE!
*/

let readyToSkate = false;
let crewStatus = true;
let cameraBattery = "green";

if (crewStatus && cameraBattery === "green") {
   console.log("Crew & cameraBattery is a go!");
   readyToSkate = true;
} else {
   console.log("WARNING: Crew or cameraBattery not ready!");
   readyToSkate = false;
}

if (readyToSkate) {
   console.log("Grab your skateboard...");
   console.log("Ready...");
   console.log("Set...");
   console.log("SKATE!");
} else {
   console.log("No skating today.");
}