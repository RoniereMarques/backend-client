const { app } = require("../../home/index");
const fs = require("fs");

app.use("/code", async (req, res) => {
    res.send({
        status: 200
    });
});