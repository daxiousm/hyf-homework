const bornYear = prompt("dogYearOfBirth");
const futureYear = prompt("dogYearFuture");

const dogAge = futureYear - bornYear;
const shouldShowResultInDogYears = new Boolean(true);
if (shouldShowResultInDogYears) {
  alert("Your dog will be " + dogAge * 7 + " years old in " + b + ".");
} else {
  alert("Your dog will be " + dogAge + " human years");
}
