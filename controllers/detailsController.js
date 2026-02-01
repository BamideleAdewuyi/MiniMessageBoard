const messages = require("../routes/indexRouter");
// const CustomNotFoundError = require ("../errors/CustomNotFoundError");

const getMessageById = async (req, res) => {
    const { messageId } = req.params;
    const message = await db.getMessageById(Number(messageId));

    // if (!message) {
    //     throw new CustomNotFoundError("Author not found");
    // }

    res.send(`Message writer: ${message.user}`);
};

module.exports = { getMessageById };