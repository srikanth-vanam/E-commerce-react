import { Container, Nav, Navbar } from "react-bootstrap";

const Header = (props) => {
  return (
      <Navbar bg="dark" sticky="top">
        <Container>
          <Navbar.Brand className="text-white">E-COMMERCE</Navbar.Brand>
            <Nav.Item className="d-flex justify-content-between">
              <Nav.Link className="text-white">HOME</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link className="text-white">STORE</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link className="text-white">ABOUT US</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                className="ml-auto text-white"
                onClick={() => props.onShow(false)}
              >
                Cart
              </Nav.Link>
            </Nav.Item>
        </Container>
      </Navbar>
  );
};

export default Header;
