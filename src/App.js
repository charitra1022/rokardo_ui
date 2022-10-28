import 'bootstrap/dist/css/bootstrap.min.css';

import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './Home';
import SongList from './ListView/SongList';
import MiniPlayer from './MiniPlayer';
import NavBar from './Navbar';


function App() {
  return (
    // <Container className="App" fluid>

    <Router>
      <NavBar />

      <Routes>
        <Route path='/'>
          <Route index element={<Home />} />
          <Route path='/song/search' element={<SongList />}></Route>
        </Route>
      </Routes>

      <MiniPlayer id='miniplayer' />
    </Router>


    // </Container>
  );
}

export default App;
