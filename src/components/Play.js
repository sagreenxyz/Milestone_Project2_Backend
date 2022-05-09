import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'

export default function Play () {
    return (
        <div className='play'>
            <Button variant='dark' size='lg'>
                <Link className='button-link' to='/play/game' >Play Trivia</Link>
            </Button>
        </div>
    )
}