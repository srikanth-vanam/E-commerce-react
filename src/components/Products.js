import { Col, Container, Row } from "react-bootstrap";

const Products = (props) => {
  return (
    <>
      <Container>
        <Row>
          {props.items.map((item) => (
            <>
              <Col>
                <p>{item.title}</p>
                <img src={item.imageUrl}></img>
                <p>{item.price}</p>
              </Col>
            </>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default Products;
