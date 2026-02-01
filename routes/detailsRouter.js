const Router = require('express');
const { getMessageById } = require("./indexRouter")

const detailsRouter = Router();

detailsRouter.get("/", (req, res) => {
    res.send("DETAILS");
});

detailsRouter.get("/:messageId", getMessageById);

module.exports = detailsRouter;