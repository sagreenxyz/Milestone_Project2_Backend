// DEPENDENCIES
const express = require('express')
const app = express()
const port = process.env.PORT || 5000;
const cors = require('cors')
const methodOverride = require('method-override')

app.use(cors())

// CONFIGURATION / MIDDLEWARE
require('dotenv').config()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(methodOverride('_method'))

// ROOT
app.get('/', (req, res) => {
    res.status(200).json({
        message: 'Welcome to the Trivia API'
    })
})

// CONTROLLERS  
const questionsController = require('./controllers/questions_controller')
app.use('/questions', questionsController)

const answersController = require('./controllers/answers_controller')
app.use('/answers', answersController)

// LISTEN
app.listen(port, () => {
    console.log(`Express backend is connected to react on port ${port}`)
})

//** WILD CARD
app.get('*', (req, res) => {
    res.render('notFound')
  })