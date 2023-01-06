"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn("electionModel", "adminID", {
      type: Sequelize.DataTypes.INTEGER,
    });
    await queryInterface.addConstraint("electionModel", {
      fields: ["adminID"],
      type: "foreign key",
      references: {
        table: "adminModel",
        field: "id",
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn("electionModel", "adminID");
  },
};
