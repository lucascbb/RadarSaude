const { Router } = require("express");
const routes = Router();

const PersonController = require("../controllers/Person.controller");

routes.get("/", PersonController.getPeople);

routes.post("/", PersonController.createPerson);

routes.patch("/", PersonController.updatePerson);

routes.delete('/:id', PersonController.deletePerson)


module.exports = routes;
