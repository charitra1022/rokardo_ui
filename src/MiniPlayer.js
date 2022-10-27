import cover from "./images/song-image.png";
import "./css/MiniPlayer.css";

import { Container, Row, Col, Button } from "react-bootstrap";
import { BiSkipPrevious, BiSkipNext } from "react-icons/bi";
import { BsPlayFill } from "react-icons/bs";


const MiniPlayer = () => {
  return (
    <Container id="player-container" fluid>
      <Row >
        
        <Col id="art-container">
          <img src={cover} alt="" />
        </Col>

        <Col id="controls-container">
          <Row>
            <span id="song-title">This is a song</span>
          </Row>

          <Row id="seek-container">
            <Col xs={1} className="time-display" style={{ textAlign: "right" }}>
              <span>2:36</span>
            </Col>
            <Col xs={10} className="seek-bar">
              <input type="range" />
            </Col>
            <Col xs={1} className="time-display" style={{ textAlign: "left" }}>
              <span>2:36</span>
            </Col>
          </Row> {/* seek-container */}



          <Row id="player-button-container">
            <Col className="player-button">
              <Button>
                <BiSkipPrevious />
              </Button>
            </Col>

            <Col className="player-button">
              <Button>
                <BsPlayFill />
              </Button>
            </Col>

            <Col className="player-button">
              <Button><BiSkipNext/></Button>
            </Col>
          </Row> {/* player-button-container */}
        </Col> {/* controls-container */}
      </Row>
    </Container>
  );
};

export default MiniPlayer;
