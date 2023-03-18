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

let readyToSkate = false;
let energyLevel = 18000;

if (energyLevel >= 24000) {
   console.log("Energy level is a go!");
   readyToSkate = true;
} else {
   console.log("WARNING: Insufficient energy!");
   readyToSkate = false;
}