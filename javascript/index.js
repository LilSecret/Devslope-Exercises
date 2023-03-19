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

// let readyToSkate = false;
// let crewStatus = true;
// let cameraBattery = "green";

// if (crewStatus && cameraBattery === "green") {
//    console.log("Crew & cameraBattery is a go!");
//    readyToSkate = true;
// } else {
//    console.log("WARNING: Crew or cameraBattery not ready!");
//    readyToSkate = false;
// }

// if (readyToSkate) {
//    console.log("Grab your skateboard...");
//    console.log("Ready...");
//    console.log("Set...");
//    console.log("SKATE!");
// } else {
//    console.log("No skating today.");
// }

/*
Directions:
1. Fix runtime errors.
2. Remember to examine the error message for clues about what is going wrong.
3. Pay close attention to any line numbers mentioned in the message - these will help you locate and fix the mistake in the code
Expected Result:
=> WARNING: Insufficient energy!
*/

// let readyToSkate = false;
// let energyLevel = 18000;

// if (energyLevel >= 21000) {
//   console.log("Energy level is a go!");
//   readyToSkate = true;
// } else {
//   console.log("WARNING: Insufficient energy!");
//   readyToSkate = false;
// }

/*
Directions:
1. Find and fix the runtime error.
Expected Result:
=> Energy level is a go!
=> Grab your skateboard...
=> Ready...
=> Set...
=> SKATE!
*/

// let readyToSkate = false;
// let energyLevel = 24010;

// if (energyLevel >= 24000) {
//   console.log("Energy level is a go!");
//   readyToSkate = true;
// } else {
//   console.log("WARNING: Insufficient energy!");
//   readyToSkate = false;
// }

// if (readyToSkate) {
//   console.log("Grab your skateboard...");
//   console.log("Ready...");
//   console.log("Set...");
//   console.log("SKATE!");
// } else {
//    console.log("No skating today.");
// }

/*
Requirements:
1. It's time to skate only if your energy, crew and camera battery all check out OK.
2. If a check fails, print that information to the console and forget about skating today.
3. If all checks are successful, print a message to the console and go skate!
Logic errors do not generate warning messages or prevent the code from running, but the program still does not work as intended.
First, run this sample code as-is and examine the output. Should you be ready to skate? Did you?
💡 Tips:
1. Break the code down into smaller chunks.
2. Consider the first if/else block. Add console.log(readyToSkate) after this block, then run the program. Given the energyLevel value, should readyToSkate be true or false after the check? Is the program behaving as expected?
3. Consider the second if/else block. Add another console.log(readyToSkate) after this block and run the program. Given crewStatus and cameraStatus, should readyToSkate be true or false after this check?
4. Consider both if/else blocks together. Given the values for energyLevel, crewStatus and cameraStatus, should readyToSkate be true or false per the requirements? Is the program behaving as expected?
5. When checking the energy readiness and the crew & camera readiness, does it make sense to store the result to a single variable, readyToSkate? Perhaps energy readiness and crew & camera readiness should have their own variable to update 🤷‍♂️
Expected Result:
=> WARNING: Insufficient energy!
=> Crew & cameraBattery is a go!
=> No skating today.
*/

// let readyToSkate = false;
// let energyLevel = 18000;
// let crewStatus = true;
// let cameraBattery = "green";

// if (energyLevel >= 24000) {
//    console.log("Energy level is a go!");
//    readyToSkate = true;
// } else {
//    console.log("WARNING: Insufficient energy!");
//    readyToSkate = false;
// }

// if (crewStatus && cameraBattery === "green"){
//    console.log("Crew & cameraBattery is a go!");
//    readyToSkate = true;
// } else {
//    console.log("WARNING: Crew or cameraBattery not ready!");
//    readyToSkate = false;
// }

// if (!readyToSkate) {
//    console.log("Let's goooooo!");
//    console.log("Time to skate!");
// } else {
//    console.log("No skating today.");
// }

// ###############################Spacer########################

// let tvShows = ['The Walking Dead', 'Breaking Bad', 'The Office'];
// let userSavedMoves = [];

// userSavedMoves.push('Jackie Chan');
// userSavedMoves.push('Men in Black');
// userSavedMoves.push('Future Fight');

// userSavedMoves.pop();


// console.log(userSavedMoves);

// const fruits = [];
// fruits.push("banana", "apple", "peach");
// fruits[5] = "mango";
// fruits.length = 2;
// console.log(fruits); // ['banana', 'apple', 'peach', empty x 2, 'mango', empty x 4]
// console.log(Object.keys(fruits)); // ['0', '1', '2', '5']
// console.log(fruits.length); // 10
// console.log(fruits[8]); // undefined

// ###############################Spacer########################

// let favMovies = [
//   {
//     title: 'Hacksaw Ridge',
//     genre: 'awesome',
//     finished: false
//   },
//   {
//     title: 'Transformers II',
//     genre: 'awesome',
//     finished: false
//   },
//   {
//     title: 'How to Train a Dragon',
//     genre: 'awesome',
//     finished: false
//   },
//   {
//     title: 'I am Legend',
//     genre: 'awesome',
//     finished: false
//   },
//   {
//     title: 'Rick and Morty',
//     genre: 'kids',
//     finished: true
//   }
// ]

// let finishedMovies = [];
// let notFinishedMovies = [];

// for(let i = 0; i < favMovies.length; i++) {
//   if(favMovies[i].finished === true) {
//     finishedMovies.push(favMovies[i])
//   }
// }
// for(let i = 0; i < favMovies.length; i++) {
//   if(favMovies[i].finished === false) {
//     notFinishedMovies.push(favMovies[i])
//   }
// }
// console.log(notFinishedMovies);
// console.log(finishedMovies);

var bottles = 99;
var bottleWord = 'bottles';


while (bottles >= 1) {
  if (bottles === 1) {
    bottleWord = 'bottle';
  }
  console.log(bottles + ' ' + bottleWord + ' of milk on the wall');
  bottles--;
}
