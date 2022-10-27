import 'bootstrap/dist/css/bootstrap.min.css';

import { Container } from "react-bootstrap";

import Home from './Home';
import MiniPlayer from './MiniPlayer';


function App() {
  return (
    <Container className="App" fluid>

      <Home />

      <MiniPlayer id='miniplayer' />
    </Container>
  );
}

export default App;
