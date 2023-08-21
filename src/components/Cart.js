import { Button, Card, Container, FormControl, Table } from "react-bootstrap";

const Cart = (props) => {
  return (
    <>
      <Card
        className="col-5 position-absolute top-3 end-0 p-3"
        style={{ zIndex: 100 }}
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
            <Table >
              <thead>
                <tr>
                  <th >ITEM</th>
                  <th>PRICE</th>
                  <th>QUANTITY</th>
                </tr>
              </thead>
              <tbody>
                {props.items.map((item) => (
                  <tr>
                    <td>
                        <div className="d-flex align-items-center ">
                      <img
                        src={item.imageUrl}
                        style={{ height: "100px" }}
                      ></img>
                      <p className="m-2">{item.title}</p>
                      </div>
                    </td>
                    <td className="align-middle text-center">
                      <p >{item.price}</p>
                    </td>
                    <td className="align-middle ">
                      <div className="d-flex align-items-center">
                        <FormControl
                          value={item.quantity}
                          className="w-25 m-3"
                        ></FormControl>
                        <Button
                          variant="warning"
                          onClick={() => props.onRemove(item)}
                        
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
