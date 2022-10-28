import { Container, Image, Col, Row } from "react-bootstrap";

function SongAdapter() {
  const url = 'https://www.youtube.com/watch?v=JGwWNGJdvx8'
    return (
        <Container className="mt-5 border p-2" onClick={()=>window.open(url, '_blank')}>
          <Row>
            
            <Col xs={2}>
              <Image 
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1xPyQYqGkRNnLbjEdLCq9S4FK86mdUg6lIg&usqp=CAU"
                fluid
                width={100}
                height={100}
                />
            </Col>

            <Col>
              <Row className="h5">Shape of You</Row>
              <Row>
                <Col>
                  <small>Artist: </small>
                  <span>Ed Sheeran</span> 
                </Col>
                <Col>
                  <small>Plays: </small>
                  <span>726048</span> 
                </Col>
              </Row>
            </Col>
            
          </Row>
        </Container>
    );
}

export default SongAdapter;
