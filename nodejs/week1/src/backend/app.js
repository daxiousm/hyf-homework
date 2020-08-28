const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

const mealsRouter = require("./routes/meals.js");
const cheapMealsRouter = require("./routes/cheap-meals.js");
const largeMealsRouter = require("./routes/large-meals.js");
const mealRouter = require("./routes/meal.js");
const reservationsRouter = require("./routes/reservations.js");
const reservationRouter = require("./routes/reservation.js");

app.get("/meals", (req, res) => {
  res.send(mealsRouter);
});

app.get("/cheap-meals", (req, res) => {
  res.send(cheapMealsRouter);
});

app.get("/large-meals", (req, res) => {
  res.send(largeMealsRouter);
});

app.get("/meal", (req, res) => {
  res.send(mealRouter);
});

app.get("/reservations", (req, res) => {
  res.send(reservationsRouter);
});

app.get("/reservation", (req, res) => {
  res.send(reservationRouter);
});

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
