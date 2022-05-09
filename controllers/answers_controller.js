// DEPENDENCIES
const answers = require('express').Router();
const db = require('../models');
const { Answer } = db ;
const { Op } = require('sequelize');
// const client = require('../server');

// FIND ALL ANSWERS
answers.get('/', async (req, res) => {
        try {
        const foundAnswers = await Answer.findAll({
            limit: 10
        })

        res.status(200).json(foundAnswers)
    } catch (error) {
        res.status(500).json(error)
    }
})

// FIND A SPECIFIC SET OF ANSWERS
answers.get('/:id', async (req, res) => {
    try {
        const foundAnswers = await Answer.findAll({
            limit: 4,
            where: { answer_id: req.params.id }
        })
        res.status(200).json(foundAnswers)
    } catch (error) {
        res.status(500).json(error)
    }
})

// CREATE ANSWERS
answers.post('/', async (req, res) => {
    try {
        const newAnswers = await Answer.create(req.body)
        res.status(200).json({
            message: 'Successfully inserted a new question.',
            data: newAnswers
        })
    } catch(err) {
        res.status(500).json(err)
    }
})

// UPDATE ANSWERS
answers.put('/:id', async (req, res) => {
    try {
        const updatedAnswer = await Answers.update(req.body, {
            where: {
                answer_id: req.params.id
            }
        })
        res.status(200).json({
            message: `Successfully updated question.`
        })
    } catch(err) {
        res.status(500).json(err)
    }
})

// DELETE ANSWERS
answers.delete('/:id', async (req, res) => {
    try {
        const deletedAnswers = await Answer.destroy({
            where: {
                answer_id: req.params.id
            }
        })
        res.status(200).json({
            message: `Successfully deleted question.`
        })
    } catch(err) {
        res.status(500).json(err)
    }
})

// EXPORT
module.exports = answers;