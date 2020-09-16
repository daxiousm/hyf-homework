const express = require("express");
const router = express.Router();

const meals = require("../data/meals.json");
const reviews = require("../data/reviews.json");

router.get("/meals", (req, res) => {
  meals.forEach((meal) => {
    meal.review = reviews.filter((reviewed) => reviewed.mealId === meal.id);
  });
  res.send(meals);
});
module.exports = router;
