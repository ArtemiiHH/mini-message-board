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

indexRouter.get("/new", (req, res) => {
  res.render("index", { messages: messages });
});

indexRouter.post("/", (req, res) => {
  res.json(req.body.messageText);
  res.json(req.body.messageUser);
  messages.push({ text: messageText, user: messageUser, added: added });
  res.redirect("/");
});

module.exports = indexRouter;
