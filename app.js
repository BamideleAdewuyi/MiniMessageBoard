const express = require("express");
const path = require("node:path");
const app = express();
const messagesRouter = require("./routes/messagesRouter")

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use("/", messagesRouter);

const PORT = 3000;

app.listen(PORT, (error) => {
    if (error) {
        throw error;
    }
    console.log("Port 3000 running app")
});