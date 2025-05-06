'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('travel', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      travel_id: {
        type: Sequelize.BIGINT,
        allowNull: false,
      },
      employee_code: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      travel_type: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      travel_purpose: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      travel_expense_applicable: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      travel_funding: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      travel_mode: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      travel_from_date: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      travel_to_date: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      travel_duration: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      travel_advance_amount: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      travel_from_place: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      travel_to_place: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      travel_description: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      create_Update:{
        type: Sequelize.STRING,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('NOW'),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('NOW'),
      },

    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('travel');
  }
};
