const { Router } = require("express");
const indexRouter = Router();

indexRouter.post("/", (req, res) => {
  req.body();
  res.send("form");
  messages.push({ text: messageText, user: messageUser, added: new Date() });
  res.redirect("/");
});

module.exports = indexRouter;
