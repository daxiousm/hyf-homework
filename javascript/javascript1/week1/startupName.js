function givenName() {
  let firstWords = [
    "Easy",
    "Awesome",
    "Corporate",
    "Busual",
    "Rousy",
    "Benic",
    "Dious",
    "Gental",
    "Fulle",
    "Silex",
  ];

  let secondWords = [
    "Maden",
    "Quicky",
    "Snyder",
    "Nicen",
    "Ziss",
    "Fidl",
    "Linne",
    "Scotti",
    "Myriam",
    "Addis",
  ];

  const randomNumber = Math.floor(Math.random() * 10) + 0;
  let n = firstWords[randomNumber].length + secondWords[randomNumber].length;

  let startupName =
    " The startup: " +
    firstWords[randomNumber] +
    " " +
    secondWords[randomNumber] +
    " contains " +
    n +
    " characters";
  console.log(startupName);
}
givenName();
