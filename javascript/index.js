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

// PART 1
const users = [
  { name: "Bobby", hobby: "Skateboarding" },
  { name: "Kyle", hobby: "Music" },
  { name: "Sarah", hobby: "Hang-gliding" },
  { name: "Jose", hobby: "Snowboarding" },
  { name: "Phillip" },
  { name: "Charles", hobby: "Rock Climbing" },
  { name: "Tabatha", hobby: "Art" },
];

function logUser(user) {
  if(!user.hobby) {
    console.log(`Hi, ${user.name}.`);
  } else {
    console.log(`Hi, ${user.name}. I'm stoked you enjoy ${user.hobby}`);
  }
}

users.forEach(user => {
  logUser(user);
});