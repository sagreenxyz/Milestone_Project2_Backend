
import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

function ViewQuestion() {
    const navigate = useNavigate()
    const { id } = useParams()
    const [ questionData, setQuestionData ] = useState([])

    useEffect(() => {
        const API_URL = `http://localhost:5000/questions/${id}`
        const fetchData = async () => {
            const response = await fetch(API_URL)
            const resData = await response.json()
            console.log(resData)
            setQuestionData(resData)
        }
        fetchData()
    },[id])

    const renderQuestion = questionData.map((question, i) => {
        return (
            <div key={i}>
                <p>{question.question_text}</p>
            </div>
        )
    })

    const navButtons = () => {
        return(
            <div>
                <button onClick={() => navigate(-1)}>Back</button>
                |
                <button onClick={() => navigate('/questions')}>Questions</button>
            </div>
        )
    }

    return (
        <div>
            {navButtons()}
            {renderQuestion}
        </div>
    )
}

export default ViewQuestion