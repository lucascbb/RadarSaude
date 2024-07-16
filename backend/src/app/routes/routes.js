const { Router } = require("express");
const routes = Router();

const PersonRoutes = require("./Person.routes");

routes.use("/person", PersonRoutes);

routes.get('/', (req, res) => {
    res.send('A API está funcionando!');
});

module.exports = routes;
