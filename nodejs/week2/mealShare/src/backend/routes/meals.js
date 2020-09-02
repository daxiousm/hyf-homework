const express = require("express");
const router = express.Router();

const meals = require("../data/meals.json");

router.get("/meals", (req, res) => {
  const id = parseInt(req.query.id);
  const mealWithId = meals.filter((meal) => meal.id === id);
  if (!id) {
    res.send("not a valid number");
  } else if (id.length === 0) {
    return "we have a new menu";
  } else {
    res.json(mealWithId);
  }
  const maxPrice = parseInt(req.query.maxPrice);
  const maximumPrice = meals.forEach((meal) => {
    meal.price < maxPrice;
  });
  if (maxPrice) {
    res.json(maximumPrice);
  } else {
    res.status(400).send("unknown request");
  }
  const title = req.query.title;
  const MealTitle = meals.forEach((meal) => meal.title.toLowerCase === title);
  if (title) {
    res.json(MealTitle);
  } else {
    res.status(400).send("unknown request");
  }
  const createdAfter = Date.parse(req.query.createdAfter);
  const mealCreatedAfter = meals.filter(
    (meal) => meal.Date.parse(createdAt) > createdAfter
  );
  if (createdAfter) {
    res.json(mealCreatedAfter);
  } else {
    res.status(400).send("unknown request");
  }
  const limit = parseInt(req.query.limit);
  const limitedMeals = meals.forEach((meal) => limit > meals.indexOf(meal));
  if (limit) {
    res.json(limitedMeals);
  }
  res.send("use the correct query format");
});

module.exports = router;
