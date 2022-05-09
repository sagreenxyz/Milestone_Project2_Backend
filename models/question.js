'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Question extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Answer}) {
      Question.hasMany(Answer, {
        foreignKey: "question_id",
        as: "answers"
      })
    }
  }
  Question.init({
    question_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    category_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    question_type_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    difficulty_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    question_text: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
  }, {
    sequelize,
    modelName: 'Question',
    tableName: 'questions',
    timestamps: false
  });
  return Question;
};