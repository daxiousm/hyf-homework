const travelInformation = {
  speed: 50,
  destinationDistance: 432,
};
function timeToDestination(travelInfo) {
  const totalTime = travelInfo.destinationDistance / travelInfo.speed;
  const hours = Math.floor(totalTime);
  const minutes = Math.round((totalTime - hours) * 60);
  return `${hours} hours ${minutes} minutes`;
}
const travelTime = timeToDestination(travelInformation);
console.log(travelTime); // 4 hours and 42 minutes
