const db = require("../db/queries");
const { body, validationResult, matchedData } = require("express-validator");

const alphaErr = "must only contain letters.";
const nameLengthErr = "must be between 1 and 30 characters";
const messageLengthErr = "can be maximum 255 characters.";

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
};

async function messageGet(req, res) {
    const id = req.params.id;
    const rows = await db.getMessage(id)
    const message = rows[0];
    res.render(`details`, {
        title: "Message Details",
        message: message
    });
};

module.exports = {
   messagesGet,
   newMessageGet,
   newMessagePost,
   messageGet
};