'use strict';
const bcrypt = require("bcryptjs");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    const hash = bcrypt.hashSync("secret", 5);

    return queryInterface.bulkInsert('Users', [
      {
        name: 'Сергей',
        email: 'example1@example.com',
        password: hash,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Александр',
        email: 'example2@example.com',
        password: hash,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Светлана',
        email: 'example3@example.com',
        password: hash,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Юрий',
        email: 'example4@example.com',
        password: hash,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Всеволод',
        email: 'example5@example.com',
        password: hash,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
