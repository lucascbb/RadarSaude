'use strict';
const { v4: uuidv4 } = require('uuid');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, _Sequelize) {
    const genders = ["Other", "Female", "Male"];

    const users = Array.from({ length: 54 }).map((_ele, index) => ({
      id: uuidv4(),
      name: 'João',
      email: `joao${index}@email.com`,
      phone: `${index > 9 ? index : `0${index}`}900000000`,
      gender: genders[Math.floor(Math.random() * genders.length)],
      birthDate: `20${index > 9 ? index : `0${index}`}-01-01`
    }));

    await queryInterface.bulkInsert('People', users, {});
  },

  async down(queryInterface, _Sequelize) {
    await queryInterface.bulkDelete('People', null, {});
  }
};
