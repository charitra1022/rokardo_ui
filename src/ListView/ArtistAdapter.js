import { Col, Figure } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import "../css/ArtistAdapter.css";

const ArtistAdapter = (props) => {
  // navigate to artist page
  const navigate = useNavigate();
  const goToArtistPage = (params) =>
    navigate({
      pathname: `/artist/${params.mbid}`,
    });

  return (
    <Col>
      <Figure onClick={() => goToArtistPage({ mbid: props.mbid })}>
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
