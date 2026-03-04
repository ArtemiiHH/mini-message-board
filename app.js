const express = require("express");
const app = express();
const path = require("node:path");
const PORT = 3000;

const messages = [
  {
    text: "Wagwan, mandem!",
    user: "Valera",
    added: new Date(),
  },
  {
    text: "Zdarova zaebal!",
    user: "Andrey",
    added: new Date(),
  },
];

const indexRouter = require("./routes/indexRouter");
const newMsgRouter = require("./routes/newMsgRouter");

app.route("/", indexRouter);
app.route("/new", newMsgRouter);

app.set("views", path.join(__dirname, "views"));
app.set("views", "ejs");

app.listen(PORT, (error) => {
  if (error) {
    throw Error;
  }

  console.log(`Listening on port:${PORT}`);
});
