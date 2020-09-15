const app = require("./app.js");
const PORT = process.env.PORT || 3000;
const server = app.listen(PORT, () =>
  console.log(`Server started on port ${PORT}`)
);
module.exports = server;