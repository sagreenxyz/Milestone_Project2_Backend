'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Answer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Question}) {
      Answer.belongsTo(Question, {
        foreignKey: "question_id",
        as: "question"
      })
    }
  }
  Answer.init({
    answer_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    question_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    answer_text: {
      type: DataTypes.STRING,
      allowNull: false
    },
    flag_correct: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Answer',
    tableName: 'answers',
    timestamps: false
  });
  return Answer;
};