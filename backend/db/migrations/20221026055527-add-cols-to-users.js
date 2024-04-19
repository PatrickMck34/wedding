'use strict';
let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    options.tableName = "Users"
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
   
    // await queryInterface.addColumn('Spots', 'avgRating', {
    //   type: Sequelize.DECIMAL,
      
    // })
    // await queryInterface.addColumn('Spots', 'previewImage', {
    //   type: Sequelize.STRING,
     
    // })
  },

  async down (queryInterface, Sequelize) {
    options.tableName = "Users"
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */

    // await queryInterface.removeColumn('Spots', 'avgRating')
    // await queryInterface.removeColumn('Spots', 'previewImage')
  }
};
