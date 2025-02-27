'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const categories = require('./categories.json')

    categories.forEach(e => {
      e.createdAt = new Date();
      e.updatedAt = new Date();
    })

    await queryInterface.bulkInsert('categories', categories)
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('categories', null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
