const Router = require('express');
const { getMessageById } = require("../controllers/detailsController");

const detailsRouter = Router();

detailsRouter.get("/:messageId", getMessageById);

module.exports = detailsRouter;