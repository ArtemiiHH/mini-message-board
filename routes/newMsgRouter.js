const { Router } = require("express");
const newMsgRouter = Router();

newMsgRouter.post("/new", (req, res) => {
  res.render("form");
});

module.exports = newMsgRouter;
