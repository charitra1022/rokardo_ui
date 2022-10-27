import 'bootstrap/dist/css/bootstrap.min.css';

import { Container } from "react-bootstrap";

import Home from './Home';
import MiniPlayer from './MiniPlayer';
import NavBar from './Navbar';


function App() {
  return (
    <Container className="App" fluid>
      <NavBar />

      <Home />

      <MiniPlayer id='miniplayer' />
    </Container>
  );
}

export default App;
