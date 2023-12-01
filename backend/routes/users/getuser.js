const { app } = require("../../home/index");

app.use("/userid", async (req, res) => {
    if ('id' in req.query) {
        // Você tem um ID, pode prosseguir com o código que precisa dele
        res.send({
            status: 200,
            message: "User ID" + " " + req.query.id
        });
    } else {
        // Você não passou um ID, retorne uma mensagem de erro adequada
        return res.status(400).json({ error: "Não passou um ID" });
    }
});