const express = require("express");
const router = express.Router();
const reservations = require("../data/reservations.json");

router.get("/reservations/:id", (req, res) => {
  const reservationId = parseInt(req.params.id);
  if (reservationId === null) {
    res.json(reservations);
  } else if (reservationId === Number) {
    const reserveNumber = reservations.forEach((reservation) => {
      reservation.id === reservationId;
    });
    res.send(reserveNumber);
  } else {
    res
      .status(404)
      .send(`there is no reservation with the given id: ${reservationId}`);
  }
});
module.exports = router;
