const { Router } = require("express");
const newMsgRouter = Router();

newMsgRouter.get("/", (req, res) => {
  res.send("New message");
});

module.exports = newMsgRouter;
