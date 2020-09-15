const express = require("express");
const router = express.Router();
const meals = require("../data/meals.json");

router.get("/cheap-meals", (req, res) => {
  const cheapMeals = meals.filter((meal) => {
    return meal.price < 120;
  });
  res.send(cheapMeals);
});

module.exports = router;
