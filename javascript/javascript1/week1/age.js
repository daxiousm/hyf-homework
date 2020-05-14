// a future age calculator

let x = prompt("yearOfBirth");
let y = prompt("yearFuture");
let z = y - x;
function calculateAge(yearOfBirth, yearFuture) {
  if (z > 0) {
    alert("You will be " + z + " years old in " + y + ".");
  } else {
    alert("you are not born yet");
  }
}
calculateAge(x, y);
