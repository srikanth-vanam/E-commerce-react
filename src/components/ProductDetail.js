import { Card } from "react-bootstrap";

const ProductDetail= () => {
    return ( <>
        <Card className="w-50 mt-4 m-auto p-3 bg-warning text-dark">
            <Card.Title className="text-center">Images and Reviews of the products</Card.Title>
            <Card.Body className="text-center">
                some example images
            </Card.Body>
            <Card.Body className="text-center">
                some reviews of the product 
                <h5>Review 1:</h5>
                <p>This is so nice and good!</p>
                <h5>Review 2:</h5>
                <p>Good, Original produts.</p>
                <h5>Review 3:</h5>
                <p>Color and fabric is very nice guys.</p>

            </Card.Body>
        </Card>
    </> );
}
 
export default ProductDetail