const { Router } = require("express");
const index = Router();

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

index.get("/", (req, res) => {
  res.render("index", { messages: messages });
});

index.get("/new", (req, res) => {
  res.render("form");
});

index.post("/new", (req, res) => {
  const text = req.body.messageText;
  const user = req.body.messageUser;
  const added = req.body.added;

  console.log(req.body);

  messages.push({ text, user, added });
  res.redirect("/");
});

module.exports = index;
