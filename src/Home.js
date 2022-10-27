import { Container } from "react-bootstrap";

import ArtistList from './ListView/Artists';
import GenreList from './ListView/Genres';


function Home() {
  return (
    <Container fluid>

      <ArtistList className='horizontal-list' />
      <GenreList className='horizontal-list' />

    </Container>
  );
}

export default Home;
