import { useContext } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import CartContext from "./CartContext";

const Header = (props) => {
  const ctx=useContext(CartContext);
  let cartItemsCount=0;
  if(ctx.cartItems.length!==0){
    ctx.cartItems.forEach(element => {
      cartItemsCount+=element.quantity;
    });
  }

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
            <Nav.Item className="d-flex">
              <Nav.Link
                className="ml-auto text-white border border-primary rounded-2 p-1"
                onClick={() => props.onShow(false)}
              >
                Cart
                
              </Nav.Link>
              <p className="text-white fw-bold m-1">{cartItemsCount}</p>

            </Nav.Item>
        </Container>
      </Navbar>
  );
};

export default Header;
