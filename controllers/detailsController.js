const messages = require("../routes/indexRouter");
const CustomNotFoundError = require ("../errors/CustomNotFoundError");

const getMessageById = async (req, res) => {
    const { messageId } = req.params;
    const message = await messages.getMessageById(Number(messageId));

    if (!message) {
        throw new CustomNotFoundError("Message not found");
    }

    res.send(`Message writer: ${message.user}, Message: ${message.text}, Date: ${message.added}`);
};

module.exports = { getMessageById };