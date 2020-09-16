const express = require("express");
const app = express();
app.get("/numbers/add", (req, res) => {
  const firstNumber = parseInt(req.query.first);
  const secondNumber = parseInt(req.query.second);
  const sum = firstNumber + secondNumber;
  if (!firstNumber || !secondNumber) {
    res.status(400).send("input must be numbers");
  } else {
    res.send(`${sum}`);
  }
});

app.get("/numbers/multiply", (req, res) => {
  const firstNumber = parseInt(req.query.first);
  const secondNumber = parseInt(req.query.second);
  const multiply = firstNumber * secondNumber;
  if (!firstNumber || !secondNumber) {
    res.status(400).send("input must be numbers");
  } else {
    res.send(`${multiply}`);
  }
});

app.listen(3000, function () {
  console.log(`> Ready on http://localhost:3000`);
});
