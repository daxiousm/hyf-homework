const express = require("express");
const router = express.Router();

const reservations = require("../data/reservations.json");

router.get("/reservation", (request, respond) => {
  const randomReservation = Math.floor(Math.random() * reservations.length);
  respond.send(reservations);
});
module.exports = router;
