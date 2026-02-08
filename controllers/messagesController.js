const db = require("../db/queries");

async function messagesGet(req, res) {
  const messages = await db.getAllMessages();
  res.render("index", {
        title: "Messages",
        messages: messages,
  });
};

module.exports = {
   messagesGet
};