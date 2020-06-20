/* let numbers = [1, 2, 3, 4];
let newNumbers = [];

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 !== 0) {
        newNumbers[i] = numbers[i] * 2;
    }
}

console.log("The doubled numbers are", newNumbers); // [2, 6]

 */
let numbers = [1, 2, 3, 4];
const filterArray = numbers.filter((num) => {
  return num % 2 !== 0;
});
//console.log(filterArray); filters odd numbers from the numbers array
const mapArray = filterArray.map((num) => {
  return num * 2;
});
//console.log(mapArray); displays the filtered odd numbers multiplied by 2 in a new array
