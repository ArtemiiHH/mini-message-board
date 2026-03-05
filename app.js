const express = require("express");
const app = express();
const path = require("node:path");

app.use(express.urlencoded({ extended: true }));

const index = require("./routes/index");

app.use("/", index);

// Set paths
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// Run server
const PORT = 3000;
app.listen(PORT, (error) => {
  if (error) {
    throw Error;
  }

  console.log(`Listening on port:${PORT}`);
});
