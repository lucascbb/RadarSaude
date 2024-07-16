const PersonModel = require("../models/Person");


class PersonService {
    async getAll(search, page) {
        try {
            const countPeople = await PersonModel.count();

            const response = await PersonModel.findAll({
                order: [
                    ['createdAt', 'ASC']
                ],
                offset: ((Number(page) - 1) * 10),
                limit: 10,
            });

            console.log(response.map(e => e.name));

            return { response, countPeople };
        } catch (error) {
            console.error('Erro ao buscar dados!');
        }
    }

    async create(name, gender, dateBirth, phone, email) {
        try {
            await PersonModel.create({ name, birthDate: dateBirth, email, phone, gender });

            return "Criada com sucesso!";
        } catch (error) {
            throw new Error("Erro ao criar!");
        }
    }

    async update(id, name, gender, dateBirth, phone, email) {
        try {
            await PersonModel.update({ name, birthDate: dateBirth, email, phone, gender }, { where: { id } });

            return "Editado com sucesso!";
        } catch (error) {
            console.log(error);
            throw new Error("Erro ao editar!");
        }
    }

    async delete(id) {
        try {
            await PersonModel.destroy({ where: { id } });

            return "Deletado com sucesso!";
        } catch (error) {
            throw new Error("Erro ao deletar!");
        }
    }
}

module.exports = new PersonService();
