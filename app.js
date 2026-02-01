const express = require('express');
const path = require("node:path");
const app = express();

app.use(express.urlencoded({ extended: true }));

const { indexRouter } = require("./routes/indexRouter");
const newRouter = require("./routes/newRouter");
const detailsRouter = require("./routes/detailsRouter");

app.use("/", indexRouter);
app.use("/new", newRouter);
app.use("/details", detailsRouter);

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