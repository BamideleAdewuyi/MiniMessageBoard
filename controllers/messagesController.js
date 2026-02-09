const db = require("../db/queries");
const { body, validationResult, matchedData } = require("express-validator");

const alphaErr = "must only contain letters.";
const nameLengthErr = "must be between 1 and 30 characters";
const messageLengthErr = "can be maximum 255 characters.";

// Validation

const validateUser = [
    body("name").trim()
        .isAlpha().withMessage(`Name ${alphaErr}`)
        .isLength({ min: 1, max: 30 }).withMessage(`Name ${nameLengthErr}`),
    body("message").trim()
        .isLength({ max: 255}).withMessage(`Message ${messageLengthErr}`)
];



// Controller functions

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

const newMessagePost = [
    validateUser,
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).render("form", {
                errors: errors.array(),
            });
        }
        const { message, name } = matchedData(req);
        await db.postNewMessage({ message, name });
        res.redirect("/");
    }
];

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