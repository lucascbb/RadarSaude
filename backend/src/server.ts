require("dotenv").config();

const http = require("http");
const app = require("./app");
const server = http.createServer(app);

server.listen(process.env.SERVER_PORT || 8080, () => {
    console.log(`Servidor executando na porta ${process.env.SERVER_PORT || 8080}`);
});

