const express = require("express");
const router = express.Router();
const reviews = require("../data/reviews.json");

router.get("/reviews/:id", (req, res) => {
  const reviewId = parseInt(req.params.id);
  if (reviewId === null) {
    res.json(reviews);
  } else if (reviewId === Number) {
    const reviewNumber = reviews.forEach((review) => {
      review.id === reviewId;
    });
    res.send(reviewNumber);
  } else {
    res
      .status(404)
      .send(`there is no reservation with the given id: ${reviewId}`);
  }
});
module.exports = router;
