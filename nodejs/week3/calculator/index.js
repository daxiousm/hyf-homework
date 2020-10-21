const express = require("express");
const app = express();

app.use(express.json());

const port = process.env.PORT || 3000;

app.get("/calculator/:method", (req, res) => {
  const number1 = parseInt(req.query.number1);
  const number2 = parseInt(req.query.number2);
  console.log("params:", req.params);
  switch (req.params.method) {
    case "add":
      const sum = number1 + number2;
      res.send(`${sum}`);
      break;
    case "minus":
      const minus = number1 - number2;
      res.send(`${minus}`);
      break;
    case "multiply":
      const multiply = number1 * number2;
      res.send(`${multiply}`);
      break;
    case "divide":
      if (number2 > 0) {
        const divide1 = number1 / number2;
        res.send(`${divide1}`);
        break;
      }
    default:
      res.json({ hello: "numbers are not correct" });
  }
});

app.post("/calculator/:method", (req, res) => {
  console.log("I am here");
  const method = req.params.method;
  console.log(req);
  const number1 = parseInt(req.body.number1);
  const number2 = parseInt(req.body.number2);
  console.log("params:", req.params);
  switch (method) {
    case "add":
      const sum = number1 + number2;
      res.send(`${sum}`);
      break;
    case "minus":
      const minus = number1 - number2;
      res.send(`${minus}`);
      break;
    case "multiply":
      const multiply = number1 * number2;
      res.send(`${multiply}`);
      break;
    case "divide":
      if (number2 > 0) {
        const divide1 = number1 / number2;
        res.send(`${divide1}`);
        break;
      }
    default:
      res.json({ hello: "numbers are not correct" });
  }
});

app.listen(port, () => console.log(`Server listening on port ${port}!`));
