const Router = require('express');

const detailsRouter = Router();

detailsRouter.get("/", (req, res) => {
    res.send("DETAILS");
});

module.exports = detailsRouter;