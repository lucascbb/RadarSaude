const { Sequelize, Model } = require("sequelize");

class People extends Model {
    static init(sequelize) {
        super.init(
            {
                id: {
                    type: Sequelize.UUID,
                    defaultValue: Sequelize.UUIDV4,
                    primaryKey: true,
                    allowNull: false,
                    validate: {
                        isUUID: {
                            args: 4,
                            msg: 'Identificador inválido',
                        },
                    },
                },
                name: {
                    type: Sequelize.STRING,
                    allowNull: false,
                    validate: {
                        len: {
                            args: [2, 60],
                            msg: 'Nome deve ter entre 2 e 60 caracteres',
                        },
                    },
                },
                gender: {
                    type: Sequelize.ENUM('Male', 'Female', 'Other'),
                    allowNull: false,
                    validate: {
                        isIn: {
                            args: [['Male', 'Female', 'Other']],
                            msg: 'Gênero inválido',
                        },
                    },
                },
                birthDate: {
                    type: Sequelize.DATE,
                    allowNull: false,
                    validate: {
                        isDate: {
                            msg: 'Data de nascimento inválida',
                        },
                    },
                },
                phone: {
                    type: Sequelize.STRING,
                    allowNull: false,
                    unique: true,
                    validate: {
                        is: {
                            args: /^\d{11}$/,
                            msg: 'Número de telefone inválido',
                        },
                    },
                },
                email: {
                    type: Sequelize.STRING,
                    allowNull: false,
                    unique: true,
                    validate: {
                        isEmail: {
                            msg: 'E-mail inválido',
                        },
                        len: {
                            args: [2, 50],
                            msg: 'E-mail deve ter entre 2 e 50 caracteres',
                        },
                    },
                },
            },
            {
                sequelize,
            }
        );
    }
}

module.exports = People;
