import { Button, Card, CardImg, Col, Container, Row } from "react-bootstrap";

const Products = (props) => {
  return (
      <Container className="ml-5">
        <Row className="row-cols-2">
          {props.items.map((item) => (
              <Col className="w-50 ">
                <Card className="w-50 border-white m-3">
                  <p className="text-center fw-bold">{item.title}</p>
                  <Card.Body>
                    <CardImg src={item.imageUrl} />
                  </Card.Body>
                  <div className="d-flex justify-content-between">
                    <p>{item.price}</p>
                    <Button >Add Product</Button>
                  </div>
                </Card>
              </Col>
          ))}
        </Row>
      </Container>
  );
};

export default Products;
