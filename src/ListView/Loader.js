import Spinner from "react-bootstrap/Spinner";
import { Container } from "react-bootstrap";

import '../css/Loader.css';

function LoaderSpinner() {
  return (
    <Container className="loader-container">
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </Container>
  );
}

export default LoaderSpinner;
