import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom'
import './App.css';
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import TriviaLogo from '../src/Images/TriviaLogo.png';

import Play from './components/Play'
import Home from './components/Home'
import AboutUs from './components/AboutUs'
import Game from './components/Game'
import Questions from './components/Questions'
import NewQuestion from './components/NewQuestion'
import ViewQuestion from './components/ViewQuestion';

function App() {
  return (
    <div className="App">
      <Router>
        <header>
        <img src={TriviaLogo} alt="TriviaLogo"/>
          <Container>
            <Nav className="justify-content-center" defaultActiveKey="/" variant="tabs" fill>
              <Nav.Item as='li'>
                <Nav.Link href="/">
                  <Link className='text-link' to="/">Home</Link>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item as='li'>
                <Nav.Link eventKey={"playPage"}>
                  <Link className='text-link' to="/play">Play</Link>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item as='li'>
                <Nav.Link eventKey={"questionsPage"}>
                  <Link className='text-link' to="/questions">Questions</Link>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item as='li'>
                <Nav.Link eventKey={"AboutUs"}>
                  <Link className='text-link' to="/AboutUs">About Us</Link>
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Container>

        </header>

        <div className='display'>
          <Routes>
            <Route path='/AboutUs' element={<AboutUs/>}/>
            <Route path='/questions/new' element={<NewQuestion />} />
            <Route path='/questions' element={<Questions />} />
            {/* <Route path='/ViewQuestion/:id' element={<ViewQuestion />} /> */}

             {/*
            <Route path='/questions/:id/edit' element={<EditQuestion/>} /> */}
            <Route path='/play' element={<Play />} />
            <Route path='/play/game' element={<Game />} />
            <Route path='/' element={<Home />} />
          </Routes>
        </div>

      </Router>

    </div>
  );
}

export default App;
