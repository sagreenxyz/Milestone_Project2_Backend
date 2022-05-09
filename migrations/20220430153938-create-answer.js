'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('answers', {
      answer_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      question_id: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      answer_text: {
        type: Sequelize.STRING,
        allowNull: false
      },
      flag_correct: {
        type: Sequelize.BOOLEAN,
        allowNull: false
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('answers');
  }
};