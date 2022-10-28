import { Container, Image, Col, Row } from "react-bootstrap";

function SongAdapter(props) {
    return (
        <Container className="border p-2" onClick={()=>window.open(props.url, '_blank')}>
          <Row>
            
            <Col xs={2}>
              <Image 
                src={props.image}
                fluid
                width={100}
                height={100}
                />
            </Col>

            <Col>
              <Row className="h5">{props.name}</Row>
              <Row>
                <Col className='text-left'>
                  <small>Artist: </small>
                  <span>{props.artist}</span> 
                </Col>

                <Col className="text-left">
                  <small>Plays: </small>
                  <span>{props.listeners}</span> 
                </Col>
              </Row>
            </Col>
            
          </Row>
        </Container>
    );
}

export default SongAdapter;
