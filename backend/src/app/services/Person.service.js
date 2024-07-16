const { Op } = require("sequelize");
const PersonModel = require("../models/Person");


class PersonService {
    async getAll(search, page) {
        try {
            const countPeople = await PersonModel.count({
                where: {
                    [Op.or]: [
                        {
                            name: {
                                [Op.iLike]: `%${search}%`
                            }
                        },
                        {
                            email: {
                                [Op.iLike]: `%${search}%`
                            }
                        }
                    ]
                },
            }

            );

            const response = await PersonModel.findAll({
                where: {
                    [Op.or]: [
                        {
                            name: {
                                [Op.iLike]: `%${search}%`
                            }
                        },
                        {
                            email: {
                                [Op.iLike]: `%${search}%`
                            }
                        }
                    ]
                },
                order: [
                    ['createdAt', 'DESC']
                ],
                offset: ((Number(page) - 1) * 10),
                limit: 10
            });

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
