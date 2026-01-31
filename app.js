const express = require('express');
const path = require("node:path");
const app = express();

const indexRouter = require("./routes/indexRouter");
const newRouter = require("./routes/newRouter");

app.use("/", indexRouter);
app.use("/new", newRouter);
app.use(express.urlencoded({ extended: true }));

const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));

app.set("views", path.join(__dirname, "views"));

app.set("view engine", "ejs");

const PORT = 3000;

app.listen(PORT, (error) => {
    if (error) {
        throw error;
    }
});