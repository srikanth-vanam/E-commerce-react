import { useContext } from "react";
import { Button, Card, Container, FormControl, Table } from "react-bootstrap";
import CartContext from "./CartContext";

const Cart = (props) => {
  const ctx = useContext(CartContext);
  const removeItem = (item) => {
    ctx.removeItems(item);
  };
  return (
    <>
      <Card
        className="col-5 position-fixed top-3 end-0 p-2 mt-2"
        style={{ zIndex: 100, overflowY: "scroll", height: "87vh" }}
      >
        <Button
          onClick={() => props.onShow(true)}
          className="position-absolute m-1 end-0 p-1"
          variant="dark"
          style={{ width: "30px" }}
        >
          X
        </Button>
        <Card.Body>
          <Container>
            <h2 className="text-center">CART</h2>
            <Table>
              <thead>
                <tr>
                  <th>ITEM</th>
                  <th>PRICE</th>
                  <th className="text-center">QUANTITY</th>
                </tr>
              </thead>
              <tbody>
                {ctx.cartItems.map((item) => (
                  <tr>
                    <td>
                      <div className="d-flex align-items-center ">
                        <img
                          src={item.imageUrl}
                          alt="cartItem"
                          style={{ height: "100px" }}
                        ></img>
                        <p className="m-2">{item.title}</p>
                      </div>
                    </td>
                    <td className="align-middle text-center">
                      <p>{item.price}</p>
                    </td>
                    <td className="align-middle ">
                      <div className="d-flex align-items-center">
                        <FormControl
                          value={item.quantity}
                          className="w-25 m-3"
                        ></FormControl>
                        <Button
                          variant="warning"
                          onClick={() => removeItem(item)}
                        >
                          remove
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Container>
        </Card.Body>
      </Card>
    </>
  );
};

export default Cart;
