import { Col, Figure } from "react-bootstrap";
import '../css/ArtistAdapter.css';


const ArtistAdapter = (props) => {
  return (
    <Col>
      <Figure onClick={() => (window.location = props.url)}>
        <Figure.Image
          width={200}
          height={200}
          src={props.image}
          roundedCircle
          className="list-thumbnail"
        />
        <Figure.Caption>
          <h5 className="text-center">{props.name}</h5>
        </Figure.Caption>
      </Figure>
    </Col>
  );
};

export default ArtistAdapter;
