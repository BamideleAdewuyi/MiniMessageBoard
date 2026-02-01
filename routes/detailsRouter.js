const Router = require('express');
const { getMessageById } = require("../controllers/detailsController");

const detailsRouter = Router();

detailsRouter.get("/", (req, res) => {
    res.send("DETAILS");
});

detailsRouter.get("/:messageId", getMessageById);

module.exports = detailsRouter;