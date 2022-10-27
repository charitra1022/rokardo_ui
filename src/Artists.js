import { Container, Row, Col, Figure } from "react-bootstrap";

import arijistSingh from "./images/artists/arijistSingh.jpg";
import selenaGomez from "./images/artists/selenaGomez.jpg";
import justinBieber from "./images/artists/justinBieber.jpg";
import katyPerry from "./images/artists/katyPerry.jpg";
import cahrliePuth from "./images/artists/cahrliePuth.jpg";


const ArtistList = () => {
  return (
    <Container fluid style={{padding: '100px', paddingTop: '20px', paddingBottom: '20px'}}>
      <h2>Artists</h2>

      <Row>
        <Col>
          <Figure>
            <Figure.Image width={200} height={200} src={arijistSingh} roundedCircle />
            <Figure.Caption>
              <h5 className="text-center">Arijit Singh</h5>
            </Figure.Caption>
          </Figure>
        </Col>

        <Col>
          <Figure>
            <Figure.Image width={200} height={200} src={selenaGomez} roundedCircle />
            <Figure.Caption>
              <h5 className="text-center">Selena Gomez</h5>
            </Figure.Caption>
          </Figure>
        </Col>

        <Col>
          <Figure>
            <Figure.Image width={200} height={200} src={justinBieber} roundedCircle />
            <Figure.Caption>
              <h5 className="text-center">Justin Bieber</h5>
            </Figure.Caption>
          </Figure>
        </Col>

        <Col>
          <Figure>
            <Figure.Image width={200} height={200} src={katyPerry} roundedCircle />
            <Figure.Caption>
              <h5 className="text-center">Katy Perry</h5>
            </Figure.Caption>
          </Figure>
        </Col>

        <Col>
          <Figure>
            <Figure.Image width={200} height={200} src={cahrliePuth} roundedCircle />
            <Figure.Caption>
              <h5 className="text-center">Charlie Puth</h5>
            </Figure.Caption>
          </Figure>
        </Col>



      </Row>
    </Container>
  );
};

export default ArtistList;
