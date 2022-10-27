import cover from "./images/song-image.jpg";
import "./css/MiniPlayer.css";

import { Container, Row, Col, Button, Image } from "react-bootstrap";
import { BiSkipPrevious, BiSkipNext } from "react-icons/bi";
import { BsPlayFill } from "react-icons/bs";


const MiniPlayer = () => {
  return (
    <Container id="player-container" fluid>
      <Row >
        
        <Col id="art-container">
          <Image src={cover} alt="cover art" fluid height={150} width={150} />
        </Col>

        <Col id="controls-container">
          <Row>
            <h4 id="song-title">Shape of You - Ed Sheeran</h4>
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



          <div id="player-button-container">
              <Button className="player-button">
                <BiSkipPrevious />
              </Button>

              <Button className="player-button">
                <BsPlayFill />
              </Button>

              <Button className="player-button">
                <BiSkipNext/>
              </Button>
          </div> {/* player-button-container */}

        </Col> {/* controls-container */}
      </Row>
    </Container>
  );
};

export default MiniPlayer;
