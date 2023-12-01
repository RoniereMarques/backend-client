const express = require("express");
const app = express();
const fs = require("fs");
// exportando a constante para ser usado nas solicitações
module.exports = { app };
fs.readdir(`./backend/routes`, (error, folder) => {
    folder.forEach(subfolder => {
        fs.readdir(`./backend/routes/${subfolder}/`, (error, files) => {
            files.forEach(files => {
                if (!files?.endsWith('.js')) return;
                files = require(`../routes/${subfolder}/${files}`);
                if (!files?.name) return;
            });
        });
    });
});
// ligando o servidor na porta 8080
app.listen(8080, async () => {
console.log("Estou on-line na porta 8080.")
});