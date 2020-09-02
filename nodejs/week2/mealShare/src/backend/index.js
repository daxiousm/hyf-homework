const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

const mealsRouter = require("./routes/meals.js");
const reservationsRouter = require("./routes/reservations.js");
const reviewsRouter = require("./routes/reviews.js");

app.get("/meals", mealsRouter);

app.get("/reservations", reservationsRouter);

app.get("/reviews", reviewsRouter);

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
