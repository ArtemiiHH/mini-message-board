const express = require("express");
const app = express();
const path = require("node:path");
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));

const indexRouter = require("./routes/indexRouter");
const newMsgRouter = require("./routes/newMsgRouter");

// Set routes
app.route("/", indexRouter);
app.route("/new", newMsgRouter);

// Set paths
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// Render HTML
// app.get("/", (req, res) => {
//   res.render("index", { messages: messages });
// });
// app.get("/new", (req, res) => {
//   res.render("form");
// });

// Run server
app.listen(PORT, (error) => {
  if (error) {
    throw Error;
  }

  console.log(`Listening on port:${PORT}`);
});
