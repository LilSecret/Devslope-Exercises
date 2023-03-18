let currentLightColor = 'green' || 'red' || 'yellow';
currentLightColor = 'yellow';


if(currentLightColor === 'green') {
  console.log('The light is ' + currentLightColor + '.');
  console.log('It is safe to go');
} else if (currentLightColor === 'red' || currentLightColor === 'yellow') {
  console.log('The light is ' + currentLightColor + '.');
  console.log('Slow down and come to a stop');
} else {
  console.log('You are not in this universe');
}

