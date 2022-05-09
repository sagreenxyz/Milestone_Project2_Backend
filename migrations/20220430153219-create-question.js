'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('questions', {
      question_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      category_id: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      question_type_id: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      difficulty_id: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      question_text: {
        type: Sequelize.STRING,
        allowNull: false
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('questions');
  }
};