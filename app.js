const express = require("express");
const app = express();
const path = require("node:path");

app.use(express.urlencoded({ extended: true }));

const indexRouter = require("./routes/indexRouter");

app.use("/", indexRouter);
app.use("/new", indexRouter);

app.get("/", (req, res) => {
  res.render("index");
});
app.get("/new", (req, res) => {
  res.send("form");
});

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
