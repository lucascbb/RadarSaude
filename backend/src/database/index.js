const sequelize = require("sequelize");

const connectionDatabase = require("../config/database");

const Person = require("../app/models/Person");

const models = [Person];

class Database {
    constructor() {
        this.init();
    }

    init() {
        this.connection = new sequelize(connectionDatabase);
        models.map((model) => model.init(this.connection));
    }
}

module.exports = new Database();
