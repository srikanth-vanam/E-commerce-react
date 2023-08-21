import { Container, Nav, NavItem, Navbar } from "react-bootstrap";

const Header = (props) => {
  return (
    <>
      <Navbar bg="dark">
        <Container >
          <Navbar.Brand className="text-white">E-commerce</Navbar.Brand>
          <Nav.Link className="ml-auto text-white" onClick={() => props.onShow(false)}>
            Cart
          </Nav.Link>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
