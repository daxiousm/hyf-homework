const danishWords = ["bil", "plante", "kaffe", "bog", "ø", "planetarium"];

function shortestWord(words) {
  let results = words[0];
  for (let i = 0; i < words.length; i++) {
    if (results.length > words[i].length) {
      results = words[i];
    }
  }
  return results;
}
console.log(shortestWord(danishWords));
