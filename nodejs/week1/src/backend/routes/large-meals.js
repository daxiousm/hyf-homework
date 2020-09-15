const express = require("express");
const router = express.Router();

router.get("/large-meals", (req, res) => {
  const largeMeals = meals.filter((meal) => {
    return meal.description.includes("beef");
  });
  res.send(largeMeals);
});

module.exports = router;
