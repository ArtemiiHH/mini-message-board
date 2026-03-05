const express = require("express");
const app = express();
const path = require("node:path");

// Middleware that parses form data sent from HTML forms
app.use(express.urlencoded({ extended: true }));

const index = require("./routes/index");

// Define where all routes start
app.use("/", index);

// Tell Express where the view templates are stored
app.set("views", path.join(__dirname, "views"));
// Tell Express to use EJS as the template engine
app.set("view engine", "ejs");

// Define port server runs on
const PORT = 3000;
app.listen(PORT, (error) => {
  if (error) {
    throw Error;
  }

  console.log(`Listening on port:${PORT}`);
});
