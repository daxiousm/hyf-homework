// a future age calculator

const birthYear = prompt("yearOfBirth");
const futureYear = prompt("yearFuture");
const age = futureYear - birthYear;
function calculateAge(yearOfBirth, yearFuture) {
  if (age > 0) {
    alert("You will be " + age + " years old in " + futureYear + ".");
  } else {
    alert("you are not born yet");
  }
}
calculateAge(birthYear, futureYear);
