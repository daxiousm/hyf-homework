function whatToWear(temperature) {
  let message;
  if (temperature >= 0 && temperature <= 15) {
    message =
      "The weather outside is cold and do not forget to wear warm clothes!";
  } else if (temperature > 15 && temperature <= 20) {
    message = "The weather looks good but do not forget to have light jackets!";
  } else {
    message =
      "it's a very nice weather out there and you can wear shorts and light clothes and be carefull with the sunburn!";
  }
  return message;
}
const clothesToWear = whatToWear(7);
console.log(clothesToWear);
