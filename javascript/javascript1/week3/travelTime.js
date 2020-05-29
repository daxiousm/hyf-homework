const travelInformation = {
  speed: 50,
  destinationDistance: 432,
};
function timeToDestination(travelInfo) {
  const timeInHours = Math.floor(
    travelInfo.destinationDistance / travelInfo.speed
  );
  const timeInMinutes = Math.floor(
    ((travelInfo.destinationDistance % travelInfo.speed) / 100) * 60
  );
  return `${timeInHours} hours and ${timeInMinutes} minutes`;
}

const travelTime = timeToDestination(travelInformation);
console.log(travelTime); // 4 hours and 42 minutes
