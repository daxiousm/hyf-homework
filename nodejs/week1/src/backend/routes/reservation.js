const express = require("express");
const router = express.Router();

const reservations = require("../data/reservations.json");

router.get("/reservation", (req, res) => {
  const randomReservation = Math.floor(Math.random() * reservations.length);
  res.send(reservations);
});
module.exports = router;
