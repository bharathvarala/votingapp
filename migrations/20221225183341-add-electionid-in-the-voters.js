"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn("voterModel", "electionID", {
      type: Sequelize.DataTypes.INTEGER,
    });
    await queryInterface.addConstraint("voterModel", {
      fields: ["electionID"],
      type: "foreign key",
      references: {
        table: "electionModel",
        field: "id",
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn("voterModel", "electionID");
  },
};
