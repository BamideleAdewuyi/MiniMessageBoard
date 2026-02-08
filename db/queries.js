const pool = require("./pool");

async function getAllMessages() {
    const { rows } = await pool.query("SELECT * FROM messages");
    return rows;
}

async function postNewMessage(text, name) {
    await pool.query("INSERT INTO messages (text, name) VALUES ($1, $2)", [text, name]);
}

async function getMessage(id) {
    const { rows } = await pool.query("SELECT * FROM messages WHERE id=$1)", [id]);
    return rows;
}

module.exports = {
    getAllMessages,
    postNewMessage,
    getMessage,
};