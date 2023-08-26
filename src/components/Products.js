import { useContext } from "react";
import { Button, Card, CardImg, Col, Container, Row } from "react-bootstrap";
import CartContext from "./CartContext";
import { Link } from "react-router-dom/cjs/react-router-dom";
const Products = (props) => {
  const ctx = useContext(CartContext);
  const addItem = (item) => {
    ctx.addItems({ ...item, quantity: 1 });
  };
 
  return (
    <Container className="ml-5">
      <Row className="row-cols-2">
        {props.items.map((item) => (
          <Col className="w-50 ">
            <Card className="w-50 border-white m-3" key={item.id}>
              <p className="text-center fw-bold">{item.title}</p>
              <Card.Body>
                <Link to={`/products/${item.title}`}>
                  <CardImg src={item.imageUrl} />
                </Link>
              </Card.Body>
              <div className="d-flex justify-content-between">
                <p>{item.price}</p>
                <Button onClick={() => addItem(item)}>Add Product</Button>
              </div>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Products;
