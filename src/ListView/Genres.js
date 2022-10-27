import { Container, Row, Col, Figure } from "react-bootstrap";

import rockMusic from "../images/genres/rockMusic.jpg";
import jazzMusic from "../images/genres/jazzMusic.jpg";
import bluesMusic from "../images/genres/bluesMusic.jpg";
import classicalMusic from "../images/genres/classicalMusic.jpg";
import electronicMusic from "../images/genres/electronicMusic.jpg";



const GenreList = () => {
  return (
    <Container fluid style={{padding: '100px', paddingTop: '20px', paddingBottom: '20px'}}>
      <h2>Genres</h2>

      <Row>
        <Col>
          <Figure>
            <Figure.Image width={200} height={200} src={rockMusic} roundedCircle />
            <Figure.Caption>
              <h5 className="text-center">Rock</h5>
            </Figure.Caption>
          </Figure>
        </Col>

        <Col>
          <Figure>
            <Figure.Image width={200} height={200} src={jazzMusic} roundedCircle />
            <Figure.Caption>
              <h5 className="text-center">Jazz</h5>
            </Figure.Caption>
          </Figure>
        </Col>

        <Col>
          <Figure>
            <Figure.Image width={200} height={200} src={bluesMusic} roundedCircle />
            <Figure.Caption>
              <h5 className="text-center">Blues</h5>
            </Figure.Caption>
          </Figure>
        </Col>

        <Col>
          <Figure>
            <Figure.Image width={200} height={200} src={classicalMusic} roundedCircle />
            <Figure.Caption>
              <h5 className="text-center">Classical</h5>
            </Figure.Caption>
          </Figure>
        </Col>

        <Col>
          <Figure>
            <Figure.Image width={200} height={200} src={electronicMusic} roundedCircle />
            <Figure.Caption>
              <h5 className="text-center">Electroic</h5>
            </Figure.Caption>
          </Figure>
        </Col>

      </Row>
    </Container>
  );
};

export default GenreList;
