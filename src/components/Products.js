import { useContext } from "react";
import { Button, Card, CardImg, Col, Container, Row } from "react-bootstrap";
import CartContext from "./CartContext";
import { Link } from "react-router-dom/cjs/react-router-dom";
const Products = (props) => {
  const ctx = useContext(CartContext);
  const addItem = (item) => {
    ctx.addItems({ ...item, quantity: 1 });
    postDataToCrud({ ...item, quantity: 1 });
  };
  const postDataToCrud = (item) => {
    const userEmailId = ctx.userEmail;
    let newEmailId;
    if (userEmailId) {
      console.log("inside email converter");
      const a = userEmailId.split("@");
      const b = a[0] + a[1];
      const c = b.split(".");
      newEmailId = c[0] + c[1];
    }

    fetch(
      `https://crudcrud.com/api/4e8e017b5d384fd899ec59d0cee351ab/${newEmailId}`,
      {
        method: "POST",
        body: JSON.stringify(item),
        headers: {
          'Content-Type': 'application/json', // Set the content type to JSON
        },
      }
    )
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          return res.json().then((data) => {
            let errorMsg = "Failed to postdata to crudcrud ";
            if (data && data.error && data.error.message) {
              errorMsg = data.error.message;
            }
            throw new Error(errorMsg);
          });
        }
      })
      .then((data) => {
        console.log("response from crud is",data);
      })
      .catch((err) => {
        alert(err.message);
      });
  };
  return (
    <Container className="ml-5">
      <Row className="row-cols-2">
        {props.items.map((item) => (
          <Col className="w-50 ">
            <Card className="w-50 border-white m-3">
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
