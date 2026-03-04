const { Router } = require("express");
const indexRouter = Router();

indexRouter.get("/", (req, res) => {
  res.send("Index");
});

indexRouter.post("/new", (req, res) => {
  res.send("POST request to form");
});

module.exports = indexRouter;
