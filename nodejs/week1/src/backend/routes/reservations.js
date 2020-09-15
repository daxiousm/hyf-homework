const express = require("express");
const router = express.Router();
const reservations = require("../data/reservations.json");

router.get("/reservations", (req, res) => {
  res(reservations);
});

module.exports = router;
