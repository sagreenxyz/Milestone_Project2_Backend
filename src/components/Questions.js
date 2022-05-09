import Button from 'react-bootstrap/Button'
import QuestionContainer from './QuestionContainer'
import SearchBar from './SearchBar'
import ViewQuestion from './ViewQuestion'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'

export default function Questions () {

    let [search, setSearch] = useState('')
    let [data, setData] = useState([])
    let [message, setMessage] = useState("")
  
    const API_URL = 'http://localhost:5000/questions/email?email='
  
    useEffect(() => {
        if(search) {
            const fetchData = async () => {
                const response = await fetch(API_URL + search)
                const resData = await response.json()
                console.log(resData)
                if (resData.length > 0) {
                    return setData(resData)
                } else {
                    return setMessage('Not Found.')
                }
            }
            fetchData()
        }
    }, [search])
  
    const handleSearch = (e, term) => {
        e.preventDefault()
        setSearch(term)
    }

    return (
        <div> 
            <Button variant='dark' size='lg'>
                <Link className='button-link' to='/questions/new' >Create Question</Link>
            </Button>
            <SearchBar handleSearch={handleSearch}/>
            <QuestionContainer data={data}/>
        </div>
    )
}


  
  