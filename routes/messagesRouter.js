const { Router } = require("express");
const messagesController = require("../controllers/messagesController");
const messagesRouter = Router();

messagesRouter.get("/", messagesController.messagesGet);
module.exports = messagesRouter;