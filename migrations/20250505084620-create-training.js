'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('training', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      training_id: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      employee_code: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      training_type: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      training_category: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      training_course: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      training_institute_name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      training_country: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      training_expense_applicable: {
        type: Sequelize.ENUM("Yes", "No"),
        allowNull: false,
      },
      training_fund: {
        // Works for PostgreSQL
        type: Sequelize.ARRAY(Sequelize.INTEGER),
        allowNull: false,
      },
      training_from_date: {
        type: Sequelize.DATEONLY,
        allowNull: false,
      },
      training_end_date: {
        type: Sequelize.DATEONLY,
        allowNull: false,
      },
      training_duration: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      training_need_advance: {
        type: Sequelize.ENUM("Y"),
        allowNull: true,
      },
      training_advance_amount: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      training_description: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      create_update:{
        type: Sequelize.STRING,
        allowNull: false,
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.fn('NOW'),
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.fn('NOW'),
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('training');
  }
};
