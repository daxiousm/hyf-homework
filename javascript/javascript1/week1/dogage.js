let a = prompt("dogYearOfBirth");
let b = prompt("dogYearFuture");
shouldShowResultInDogYears = true;
if (shouldShowResultInDogYears) {
  let c = (b - a) * 10;
  alert("Your dog will be " + c + " years old in " + b + ".");
} else {
  let f = b - a;
  alert("Your dog will be " + f + " human years");
}
