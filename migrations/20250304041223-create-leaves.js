'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('leaves', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      employee_code: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      employee_id: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      leave_type: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      leave_from_date: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      leave_to_date: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      leave_half_day: {
        type: Sequelize.ARRAY(Sequelize.STRING),
        allowNull: false,
      },
      leave_day_shift: {
        type: Sequelize.ARRAY(Sequelize.STRING),
        allowNull: false,
      },
      no_of_leave_day: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      leave_total_days: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      leave_reason: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('leaves');
  },
};
