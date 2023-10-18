const express = require("express");
const morgan = require("morgan");

const app = express();
app.use(express.json());

app.get("/hello", (req, res) => {
    res.send("hello world");
})

app.listen(3000, () =>
    console.log("server running at port 3000")
);
