const router = require("express").Router();
let numbers = [];

router.post("/data", (req, res) => {
    const data = req.body.data

    if (!Array.isArray(data)) {
        res.status(400).json({
            status: "unsuccesful",
            message: "argument is not an array"
        });
    }

    if (data.length != 5) {
        res.status(400).json({
            status: "unsuccesful",
            message: "Array must contain 5 elements"
        });
    }

    data.forEach(element => {
        if (typeof element !== "number") {
            res.status(400).json({
                status: "unsuccesful",
                message: "All elements must be numbers"
            });
        }
    });

    numbers = data;
    res.status(201).json({
        status: "succesful",
        message: "data saved"
    });
});

router.get("/data", (req, res) => {
    if (!numbers.length) {
        res.status(404).json({
            status: "unsuccesful",
            message: "No data saved"
        });
    }

    res.status(200).json({
        status: "succesful",
        message: "data retrieved",
        data: numbers.sort()
    });
})


module.exports = router;
