const { Router } = require("express");
const indexRouter = Router();

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

indexRouter.post("/", (req, res) => {
  res.send("form");
});

module.exports = indexRouter;
