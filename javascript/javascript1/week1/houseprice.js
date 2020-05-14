let width2 = prompt("widthInMeters");
let depth = prompt("depthInMeters");
let height = prompt("heightInMeters");
let garden = prompt("gardenSizeInM2");
let volumeInMeters = width2 * height * depth;
let housePrice = volumeInMeters * 2.5 * 1000 + garden * 300;
function calcHouseCost(housePrice) {
  if (housePrice > 2500000) {
    alert("Peter is paying too much");
  } else if (housePrice < 2500000) {
    alert("Peter is paying little");
  }
}
calcHouseCost(housePrice);

function calcHouseCost2(housePrice) {
  if (housePrice > 1000000) {
    alert("Julia is paying too much");
  } else if (housePrice < 1000000) {
    alert("Julia is paying little");
  }
}
calcHouseCost2(housePrice);
