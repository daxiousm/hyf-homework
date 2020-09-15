const express = require("express");
const router = express.Router();

const meals = require("../data/meals.json");
const reviews = require("../data/reviews.json");

router.get("/", (req, res) => {
  const randomMeal = Math.floor(Math.random() * meals.length);

  randomMeal.forEach((meal) => {
    meal.review = reviews.filter((reviewed) => reviewed.mealId === meal.id);
  });
  res.send(randomMeal);
});
module.exports = router;
