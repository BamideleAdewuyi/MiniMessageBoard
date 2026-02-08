const db = require("../db/queries");

async function messagesGet(req, res) {
  const messages = await db.getAllMessages();
  res.render("index", {
        title: "Messages",
        messages: messages,
  });
};

async function newMessageGet(req, res) {
    res.render("form");
};

async function newMessagePost(req, res) {
    await db.postNewMessage(req.body.message, req.body.name)
    res.redirect("/");
}

module.exports = {
   messagesGet,
   newMessageGet,
   newMessagePost
};