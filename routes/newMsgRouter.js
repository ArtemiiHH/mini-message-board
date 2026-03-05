const { Router } = require("express");
const newMsgRouter = Router();

newMsgRouter.get("/new", (req, res) => {
  res.render("form");
});

module.exports = newMsgRouter;
