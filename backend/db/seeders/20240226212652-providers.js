'use strict';
let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}
options.tableName = "Providers"
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  // Your code here
  
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert(options, [{
      Party: 'Party1',
      Table: '39',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    




], {})

  // ],{});
  // },
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
  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete(options, null, {});
  }
//   async down (queryInterface, Sequelize) {
//     /**
//      * Add commands to revert seed here.
//      *
//      * Example:
//      * await queryInterface.bulkDelete('People', null, {});
//   */
// }

}