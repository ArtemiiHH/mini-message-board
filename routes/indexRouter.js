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
  res.render("index", { messages: messages });
});

indexRouter.post("/new", (req, res) => {
  req.body.messageText;
  req.body.messageUser;
  messages.push({ text: messageText, user: messageUser });
});

module.exports = indexRouter;
