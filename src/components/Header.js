import { useContext } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import CartContext from "./CartContext";
import { NavLink } from "react-router-dom";
const Header = (props) => {
  const ctx = useContext(CartContext);
  // let cartItemsCount = 0;
  // if (ctx.cartItems.length !== 0) {
  //   ctx.cartItems.forEach((element) => {
  //     cartItemsCount += element.quantity;
  //   });
  // }

  const clickHandler=()=>{
    props.onShow(false);
    ctx.getDataFromCrud();
  }

  return (
    <Navbar bg="dark" sticky="top">
      <Container>
        <Navbar.Brand className="text-white">E-COMMERCE</Navbar.Brand>
        <Nav.Item className="d-flex justify-content-between">
          <Nav.Link>
            <NavLink to="/" className="text-white text-decoration-none">
              HOME
            </NavLink>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <NavLink to="/products" className="text-white text-decoration-none">
            STORE
          </NavLink>
          <Nav.Link></Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link>
            <NavLink to="/aboutUs" className="text-white text-decoration-none">
              ABOUT US
            </NavLink>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link>
            <NavLink to="/login" className="text-white text-decoration-none">
              Login 
            </NavLink>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link>
            <NavLink to="/contactUs" className="text-white text-decoration-none">
              CONTACT US
            </NavLink>
          </Nav.Link>
        </Nav.Item>
        {!props.onHide && (
          <Nav.Item className="d-flex">
            <Nav.Link
              className="ml-auto text-white border border-primary rounded-2 p-1"
              onClick={clickHandler}
            >
              Cart
            </Nav.Link>
            {/* <p className="text-white fw-bold m-1">{ctx.cartItemsCount}</p> */}
            <p className="text-white fw-bold m-1">{ctx.cartCount}</p>
          </Nav.Item>
        )}
      </Container>
    </Navbar>
  );
};

export default Header;
