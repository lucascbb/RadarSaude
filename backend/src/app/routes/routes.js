const { Router } = require("express");
const routes = Router();

const PersonRoutes = require("./Person.routes");

routes.use("/person", PersonRoutes);

module.exports = routes;
