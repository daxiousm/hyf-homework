function getFullname(firstname, surname, useFormalName) {
  let fullName = firstname + " " + surname;
  if (useFormalName) {
    fullName = "Lord " + fullName;
  } else {
    fullName = firstname + " " + surname;
  }
  return fullName;
}

const fullName1 = getFullname("Daxious", "wendemu", true);
console.log(fullName1);
const fullName2 = getFullname("Dave", "Copper", false);
console.log(fullName2);
