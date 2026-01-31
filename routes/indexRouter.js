const Router = require("express");

const indexRouter = Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];

indexRouter.get("/", (req, res) => {
  res.render(`index`, { messages: messages, title: "Mini Messageboard" });
});

indexRouter.post("/new", (req, res) => {
  messages.push({ text: message, user: name, added: new Date() })
});

module.exports = indexRouter;