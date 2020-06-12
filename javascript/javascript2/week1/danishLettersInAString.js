const danishString = ["Jeg har en blå bil"];
const danshString1 = danishString.toString();
const danishString2 = ["Blå grød med rød bær"];
const danshString3 = danishString2.toString();
function char_count(str) {
  letter = ["æ", "ø", "å"];
  let letter_Count = 0;
  for (let position = 0; position < str.length; position++) {
    for (let j = 0; j < letter.length; j++)
      if (str.charAt(position) === letter[j]) {
        letter_Count += 1;
        console.log(`${letter[j]}:${str.split(letter[j]).length - 1}`);
      }
  }
  console.log(`total:${letter_Count}`);
  return;
}

console.log(char_count(danshString1));
console.log(char_count(danshString3));
