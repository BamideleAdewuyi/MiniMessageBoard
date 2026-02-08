const { Router } = require("express");
const messagesController = require("../controllers/messagesController");
const messagesRouter = Router();

messagesRouter.get("/", messagesController.messagesGet);
messagesRouter.get("/new", messagesController.newMessageGet)
module.exports = messagesRouter;