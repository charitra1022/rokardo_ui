import 'bootstrap/dist/css/bootstrap.min.css';

import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './Home';
import SongList from './ListView/SongList';
import MiniPlayer from './MiniPlayer';
import NavBar from './Navbar';


function App() {
  return (
    // <Container className="App" fluid>
    <Router>
      <NavBar />

      <Switch>
        <Route path='/song/search'>
          <SongList />
        </Route>

        <Route path='/'>
          <Home />
        </Route>
      </Switch>

      <MiniPlayer id='miniplayer' />
  


    </Router>
    // </Container>
  );
}

export default App;
