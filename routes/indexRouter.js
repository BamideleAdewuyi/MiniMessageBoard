const Router = require("express");

const indexRouter = Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
    id: 1
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
    id: 2
  }
];

indexRouter.get("/", (req, res) => {
  res.render(`index`, { messages: messages, title: "Mini Messageboard" });
});

indexRouter.post("/new", (req, res) => {
  const response = req.body;
  messages.push({ text: response.message, user: response.name, added: new Date(), id: messages.length+1 });
  res.redirect("/");
});

module.exports = indexRouter;