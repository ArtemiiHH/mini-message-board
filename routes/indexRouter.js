const { Router } = require("express");
const indexRouter = Router();

indexRouter.post("/", (req, res) => {
  res.send("form");
});

module.exports = indexRouter;
