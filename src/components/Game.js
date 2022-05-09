import { useState, useEffect } from 'react'
//import { questions as db } from '../data'


export default function Game() {
    const [gameStart, startGame] = useState(false)
    const [category, setCategory] = useState('')
    const [Qs, setQuestions] = useState(null)
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [score, setScore] = useState(0);

    // Supposed to shuffle answers, but not working yet. Causes a delay in render.
    function ShuffleAnswers(array) {
        array.map((question) => {
            let currentIndex = question.answers.length, randomIndex;

            // While there remain elements to shuffle.
            while (currentIndex != 0) {

                // Pick a remaining element.
                randomIndex = Math.floor(Math.random() * currentIndex);
                currentIndex--;

                // And swap it with the current element.
                [question[currentIndex], question[randomIndex]] =
                    [question[randomIndex], question[currentIndex]];
            }
            
        })
        return array
    }

    useEffect(() => {
        fetch('http://localhost:5000/questions')
            .then(res => {
                return res.json();
            })
            .then(data => {
                setQuestions(ShuffleAnswers(data))

            })
            .catch(err => {
                console.log(err)
            })

    }, []);

    console.log(Qs)


    // from https://www.freecodecamp.org/news/how-to-build-a-quiz-app-using-react/
    const handleAnswerOptionClick = (isCorrect) => {
        if (isCorrect) {
            setScore(score + 1);
            console.log('is correct')
            //document.getElementById('answer').style.backgroundColor = 'green'
        }



        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < Qs.length) {
            setCurrentQuestion(nextQuestion);
        } else {
            setShowScore(true);
            console.log('game over')
        }
    }

    return (
        <div className='app'>
            {showScore ? (
                <div >
                     <h3><span>Your score:</span>{Qs && (score/Qs.length)*100}% </h3>
                </div>
            ) : (
                <>
                    <div>
                        <h4 className='question-count'> {currentQuestion + 1}/{Qs && Qs.length}</h4>
                        <h4>{Qs && Qs[currentQuestion].question_text} </h4>
                    </div>
                    <div className='answers'>
                        {Qs && Qs[currentQuestion].answers.map((answer) => (
                            <button onClick={() => handleAnswerOptionClick(answer.flag_correct)}>{answer.answer_text}</button>
                        ))}
                    </div>
                </>
            )}
        </div>
    )
}