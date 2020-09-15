const express = require("express");
const router = express.Router();

const meals = require("../data/meals.json");
const reviews = require("../data/reviews.json");

router.get("/meals", (request, respond) => {
  meals.forEach((meal) => {
    meal.review = reviews.filter((reviewed) => reviewed.mealId === meal.id);
  });
  respond.send(meals);
});
module.exports = router;
