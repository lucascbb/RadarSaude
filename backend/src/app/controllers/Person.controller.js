const PersonService = require("../services/Person.service");

class PersonController {
    async getPeople(req, res) {
        const { search, page } = req.query

        try {
            const { response, countPeople } = await PersonService.getAll(search, page);

            return res.status(200).json({ response, countPeople });
        } catch (error) {
            console.log(error);
            return res.status(500).send(error.message);
        }
    }

    async createPerson(req, res) {
        const { name, gender, dateBirth, phone, email } = req.body;

        try {
            const response = await PersonService.create(name, gender, dateBirth, phone, email);

            return res.status(201).json({ message: response });
        } catch (error) {
            return res.status(500).send({ error: error.message });
        }
    }

    async updatePerson(req, res) {
        const { id, name, gender, dateBirth, phone, email } = req.body;

        try {
            const response = await PersonService.update(id, name, gender, dateBirth, phone, email);

            return res.status(201).json({ message: response });
        } catch (error) {
            return res.status(500).send({ error: error.message });
        }
    }

    async deletePerson(req, res) {
        const { id } = req.params;

        try {
            const response = await PersonService.delete(id);

            return res.status(200).json({ message: response });
        } catch (error) {
            return res.status(500).send({ error: error.message });
        }
    }
}

module.exports = new PersonController();
