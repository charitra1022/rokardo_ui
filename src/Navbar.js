import { Container, Navbar, NavDropdown, Col } from "react-bootstrap";
import { MdAccountCircle } from "react-icons/md";

import SongSearchForm from "./SongSearchForm";

import './css/Navbar.css';

const NavBar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        
        <Navbar.Brand href="/" className="navbar-brand">
          Rokardo
        </Navbar.Brand>
        
        <Col xs={8}>
          <SongSearchForm />
        </Col>

        <Col xs={2}>
          <NavDropdown
            title={<MdAccountCircle />}
            id="navbarScrollingDropdown"
          >
            <NavDropdown.Item href="#action3">Login</NavDropdown.Item>
            {/* <NavDropdown.Item href="#action4">My Account</NavDropdown.Item>
            <NavDropdown.Item href="#action4">Favourites</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action5">
              Sign Out
            </NavDropdown.Item> */}
          </NavDropdown>
        </Col>

      </Container>
    </Navbar>
  );
};

export default NavBar;
