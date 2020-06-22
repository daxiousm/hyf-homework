const danishString = ["Jeg har en blÅ bil"];
const danshString1 = danishString.toString();
const danishString2 = ["Blå grØd med rød bær"];
const danshString3 = danishString2.toString();
function char_count(str) {
  letter = ["æ", "ø", "å"];
  let letter_Count = 0;
  for (let position = 0; position < str.length; position++) {
    for (let j = 0; j < letter.length; j++)
      if (
        str.toLocaleLowerCase().charAt(position) ===
        letter[j].toLocaleLowerCase()
      ) {
        letter_Count += 1;
        console.log(
          `${letter[j].toLocaleLowerCase()}:${
            str.split(letter[j].toLocaleLowerCase()).length - 1
          }`
        );
      }
  }
  console.log(`total:${letter_Count}`);
  return;
}

console.log(char_count(danshString1));
console.log(char_count(danshString3));
