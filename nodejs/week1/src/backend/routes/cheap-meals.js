const express = require("express");
const router = express.Router();
const meals = require("../data/meals.json");

router.get("/cheap-meals", (request, respond) => {
  const cheapMeals = meals.filter((meal) => {
    return meal.price < 121;
  });
  respond.send(cheapMeals);
});

module.exports = router;
