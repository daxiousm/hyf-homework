const express = require("express");
const router = express.Router();

router.get("/large-meals", (request, respond) => {
  const largeMeals = meals.filter((meal) => {
    return meal.description.includes("beef");
  });
  respond.send(largeMeals);
});

module.exports = router;
