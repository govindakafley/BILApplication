'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('salary_advance', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      advance_id: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      employee_code: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      gross_salary: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      applicable_advance_amt: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      monthly_installment_amt: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      salary_advance_amt: {
        type: Sequelize.FLOAT,
        allowNull: true, 
      },
      salary_purpose: {
        type: Sequelize.STRING,
        allowNull: true,
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
    await queryInterface.dropTable('salary_advance');
  }
};
