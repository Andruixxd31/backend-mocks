const express = require("express");
const morgan = require("morgan");
const routes = require('./routes/routes.js');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.use("/api/v1", routes);

app.get("/hello", (req, res) => {
    res.send("hello world");
})

app.listen(3000, () => {
    console.log("server running at port 3000");
});
