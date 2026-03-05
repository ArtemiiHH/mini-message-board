// Import Router function
const { Router } = require("express");
// New router instance
const index = Router();

// Messages data
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

// GET "/" route
index.get("/", (req, res) => {

  // Render index.ejs template
  res.render("index", { messages: messages });
});

// GET "/new" route
index.get("/new", (req, res) => {

  // Render form.ejs template
  res.render("form");
});

// POST "/new" route
// Runs when form is submitted
index.post("/new", (req, res) => {
  
  // Get form data from req.body
  // Names match the "name" attributes in form inputs
  const text = req.body.messageText;
  const user = req.body.messageUser;
  const added = req.body.added;

  // Add new message object to messages array
  messages.push({ text, user, added });
  // Redirect the user back to the homepage
  res.redirect("/");
});

module.exports = index;
