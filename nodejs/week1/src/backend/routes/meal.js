const express = require("express");
const router = express.Router();

const meals = require("../data/meals.json");
const reviews = require("../data/reviews.json");

router.get("/", (request, respond) => {
  const randomMeal = Math.floor(Math.random() * meals.length);

  randomMeal.forEach((meal) => {
    meal.review = reviews.filter((reviewed) => reviewed.mealId === meal.id);
  });
  respond.send(randomMeal);
});
module.exports = router;
